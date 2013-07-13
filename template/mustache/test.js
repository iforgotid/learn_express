/**
 * Created with JetBrains PhpStorm.
 * User: philipp <philipp.xue@gmail.com>
 * Date: 7/12/13
 * Time: 7:31 PM
 */
var express = require('express')
    , cons = require('consolidate')
    , app = express();

// assign the mustache engine to .html files
app.engine('html', cons.mustache);

// set .html as the default extension
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

// test mustache
app.get('/', function(req, res){
  var viewdata = { 'test' : function(){ return 'Hey now.' }};
  res.render('index', viewdata);
});

app.listen(3000);

