var express = require('express');
var router = express.Router();
var fs = require("fs");
const { response } = require('../app');

router.use((req, res, next) => {
	console.log('index.js started');
	next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
	/*
	res.writeHead(200, {'Content-Type':'text/html'});
	fs.readFile('/public/home.html', (err,data) => {
		if (!err){
			response.end(data);
		} else {
			console.log(err);
		}
	})
	*/
	res.render(__dirname+'/public/home.html', { title: 'Express' });
});

module.exports = router;
