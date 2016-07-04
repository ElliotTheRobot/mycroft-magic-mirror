var React = require('react');
var ReactDOM = require('react-dom');

global.jQuery = require('jquery');
$=global.jQuery
require('bootstrap');

var App = require('./components/App.js');

//let webpack handle static files
require('file?name=[name].[ext]!./index.html');
require('./styles.css');

if (global.MCArgs[2] === 'mirror') {
  require('./stylesMirror.css');
} else {
  require('./stylesDesktop.css');
}

//jQuery sucks in npm with bootstrap


ReactDOM.render(
  <App process={process}/>,
  document.getElementById('app')
);
