var sys = require('sys')
var exec = require('child_process').exec;
var fs = require('fs');


function puts(error, stdout, stderr) { 
	filename = stdout.replace(/\n$/, '');
	// sys.puts(filename);
	upload2s3(filename);
	}

exec("phantomjs scrape.js ", puts);

function upload2s3(filename) {
  var AWS = require('aws-sdk'); 

  var aws_accessKeyId = "AWS-ACCESSKEYID";
  var aws_secretAccessKey = "AWS-SECRETACCESSKEY";
  var aws_s3bucket = "AWS-S3BUCKETNAME";

  AWS.config.update({accessKeyId: aws_accessKeyId, secretAccessKey: aws_secretAccessKey});
  var s3 = new AWS.S3(); 
  var data = fs.readFile(filename, function (err, data) {
	  if (err) {
	    throw err; 
	  	}
	  else {
		var params = {Bucket: aws_s3bucket, Key: filename, Body: data}
  		s3.putObject(params, function(err, data) {
	        if (err)       
	           console.log(err)     
	        else       
	        	console.log("Successfully uploaded data to " + aws_s3bucket);
	      
	     	});

	  	}
	});
}