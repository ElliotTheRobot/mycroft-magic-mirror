var React = require('react');
var ReactDOM = require('react-dom');

//let webpack handle static files
require('file?name=[name].[ext]!./index.html');
//require("../node_modules/bootstrap/dist/css/bootstrap.min.css"); //doesnt work, using ref in html instead.
require('./styles.css');

//jQuery sucks in npm with bootstrap
global.jQuery = require('jquery');
$=global.jQuery
require('bootstrap');


var App = require('./components/App.js');

ReactDOM.render(
  <App process={process}/>,
  document.getElementById('app')
);
