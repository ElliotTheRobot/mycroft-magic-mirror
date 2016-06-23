var React = require('react');

var MyCroftAdminPanel = require('./MycroftAdminPanel.js');
var Module1 = require('./Module1.js');
var Clock = require('./Clock');
//require('module');


module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <MyCroftAdminPanel />
        <Clock />
      </div>
    );
  }
});
