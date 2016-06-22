var React = require('react');
var ReactDOM = require('react-dom');

//jQuery sucks in npm with bootstrap
global.jQuery = require('jquery');
$=global.jQuery
require('bootstrap')


var App = require('./components/App.js');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
