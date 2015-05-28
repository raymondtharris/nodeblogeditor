var express = require('express');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/test');

var projectSchema = mongoose.Schema({
	name: String,
	description: String,
	version: String,
	indev: Boolean,
	tags: [String]
});

var mediaSchema = mongoose.Schema({
	name: String,
	fileUrl: String,
	project: String,
	type: String
});

var tagSchema = mongoose.Schema({
	tagName: String
});

var projects = mongoose.model('Projects', projectSchema);
var media = mongoose.model('ProjectMedia', mediaSchema);
var tags = mongoose.model('Tags', tagSchema);

app.use(express.bodyParser());
app.use(express.favicon());
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));



var getTags = function(req, res){
	tags.find({}, function(err, tagList){
		res.json(tagList);
	})
}
var addTag = function(req, res){
	console.log(req.body);
	var temp = new tags(req.body);
	//console.log(temp);
	temp.save(function(err,tagList){	
	});
}

var addTagN = function(req, res){
	console.log(req.body);
	//var temp = new tags(req.body);
	//console.log(temp);
	//temp.save(function(err,tagList){	});
}

var getProjects = function(req, res){
	projects.find({}, function(err, projList){
		res.json(projList);
	});
}

var addProject = function(req, res){
	console.log(req.body);
	var newProject  = new projects(req.body);
	newProject.save(function(err, projList){});
}
var delProject = function(req, res){
	//console.log(req.body);
	projects.remove({'_id':req.body._id}, function(err, projList){});
}

var getOneProject = function(req, res){
	projects.find({'name':req.params.name}, function(err, projList){
		res.json(projList);
	})
}


var dTag = function(req, res){
	//console.log(req.body);
	tags.remove({'_id':req.body._id}, function(err, tagList){});
}

var myTemp = function(req, res){
	//console.log(req.files.fileName.path);
	//console.log(req.files.fileName);
	fs.readFile(req.files.fileName.path, function(err, data){
	    var newPath = __dirname + "/uploads/" + req.files.fileName.originalFilename;
		fs.writeFile(newPath, data, function(err){
			fs.unlink(req.files.fileName.path, function(err){});
			res.redirect('/#/new-media');
		});
	});
}

app.get('/tags', getTags);
app.post('/tags', addTag);

app.post('/tagsNative', addTagN);

app.post('/tagsD', dTag);

app.get('/getProjects', getProjects);
app.post('/projects', addProject);
app.post('/delProj', delProject);

app.get('/getProject/:name', getOneProject);

app.post('/begin', myTemp);


app.get('/', function(req, res){
	
});


app.listen(8000);
console.log('Listening on port 8000');


