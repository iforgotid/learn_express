/**
 * Created with JetBrains PhpStorm.
 * User: philipp <philipp.xue@gmail.com>
 * Date: 7/12/13
 * Time: 4:56 PM
 */

var express = require('express');
var app = express();

// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// respond
app.use(function(req, res, next){
  res.send('Hello World\n');
});

app.get('/',function(req,res){

});

app.listen(3000);
