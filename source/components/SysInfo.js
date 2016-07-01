//Component in progress
var React = require('react');

module.exports = React.createClass({
  componentDidMount: function() {
    console.log("SysInfo");
    console.log(this.props);
    console.log(this.props.process.versions.node);
    this.setState({
      nodeVersion: this.props.process.versions.node,
      chromeVersion: this.props.process.versions.chrome,
      electronVersion: this.props.process.versions.electron
    });
    console.log("state: ");
    console.log(this.state);
  },
  render: function() {
    return (
      null
    );
  }
});
