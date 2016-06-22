var React = require('react');

var Module1 = require('./Module1.js');
var Module2 = require('./Module2.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Module1 />
        <Module2 />
      </div>
    );
  }
});
