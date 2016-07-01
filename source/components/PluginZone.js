//Using As Template
var React = require('react');

var config = require('../config.json');

var PluginTop = require('./Blank.js');
var PluginLeft = require('./Blank.js');
var PluginMid = require('./Blank.js');
var PluginRight = require('./Blank.js');
var PluginBottom = require('./Blank.js');

//Horrible :'(  '
if (config.plugins.PluginTop != null) {
  PluginTop = require('../plugins/' + config.plugins.PluginTop);
}
if (config.plugins.PluginLeft != null) {
  PluginLeft = require('../plugins/' + config.plugins.PluginLeft);
}
if (config.plugins.PluginMid != null) {
  PluginMid = require('../plugins/' + config.plugins.PluginMid);
}
if (config.plugins.PluginRight != null) {
  PluginRight = require('../plugins/' + config.plugins.PluginRight);
}
if (config.plugins.PluginBottom != null) {
  PluginBottom = require('../plugins/' + config.plugins.PluginBottom);
}

module.exports = React.createClass({
  componentDidMount: function() {
    console.log('Plugin Config is loaded into plugin zone: ');
    console.log(config);
  },

  render: function() {
    return (
      <div  className='PluginZone' >
        <div className='row'>
          <div className='PluginZone-Top col-xs-12'>
            <PluginTop mycroftInfo={this.props.mycroft} />
          </div>
        </div>
        <div className='row'>
          <div className='PluginZone-Left col-xs-12 col-md-3'>
            <PluginLeft mycroftInfo={this.props.mycroft} />
          </div>
          <div className='PluginZone-Mid col-xs-12 col-md-6'>
            <PluginMid mycroftInfo={this.props.mycroft} />
          </div>
          <div className='PluginZone-Right col-xs-12 col-md-3'>
            <PluginRight mycroftInfo={this.props.mycroft} />
          </div>
        </div>
        <div className='row'>
          <div className='PluginZone-Bottom col-xs-12'>
            <PluginBottom mycroftInfo={this.props.mycroft} />
          </div>
        </div>
      </div>
    );
  }
});
