//Using As Template
var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <h3 className='message' >[{this.props.id}]{this.props.origin} : {this.props.text}</h3>
    );
  }
});
