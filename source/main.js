var React = require('react');
var ReactDOM = require('react-dom');

//let webpack handle index.html
require('file?name=[name].[ext]!./index.html');


//jQuery sucks in npm with bootstrap
global.jQuery = require('jquery');
$=global.jQuery
require('bootstrap')


var App = require('./components/App.js');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
