var React = require('react');

module.exports = React.createClass({

  render: function() {
    var classes = 'message ' + 'dimmed-'+ this.props.cssDimmLvl;
    return (
      <h3 className={classes} >{this.props.origin} : {this.props.text}</h3>
    );
  }
});
