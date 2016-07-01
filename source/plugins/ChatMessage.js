//Using As Template
var React = require('react');

module.exports = React.createClass({

  render: function() {
    console.log("in CL");
    console.log(this.props);
    return (
      <h3 className='message' >[{this.props.key}]{this.props.origin} : {this.props.text}</h3>
    );
  }
});
