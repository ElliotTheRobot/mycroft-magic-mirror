//Using As Template
var React = require('react');

module.exports = React.createClass({
//  componentDidMount: function() {

//  },
//  getInitialState: function() {

  //},
  render: function() {
    return (
      <div  className='PluginZone' >
        <div className='row'>
          <div className='PluginZone-Top col-xs-12'></div>
        </div>
        <div className='row'>
          <div className='PluginZone-Left col-xs-12 col-md-3'></div>
          <div className='PluginZone-Mid col-xs-12 col-md-6'></div>
          <div className='PluginZone-Right col-xs-12 col-md-3'></div>
        </div>
        <div className='row'>
          <div className='PluginZone-Bottom col-xs-12'></div>
        </div>
      </div>
    );
  }
});
