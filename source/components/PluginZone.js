var React = require('react');

var config = require('../config.json');

var PluginTop = require('./Blank.js');
var PluginLeft = require('./Blank.js');
var PluginMid = require('./Blank.js');
var PluginRight = require('./Blank.js');
var PluginBottom = require('./Blank.js');

if (config.plugins.PluginTop != null) {
  PluginTop = require('../plugins/' + config.plugins.PluginTop + '/'+ config.plugins.PluginTop + '.js');
}
if (config.plugins.PluginLeft != null) {
  PluginLeft = require('../plugins/' + config.plugins.PluginLeft + '/'+ config.plugins.PluginLeft + '.js');
}
if (config.plugins.PluginMid != null) {
  PluginMid = require('../plugins/' + config.plugins.PluginMid + '/'+ config.plugins.PluginMid + '.js');
}
if (config.plugins.PluginRight != null) {
  PluginRight = require('../plugins/' + config.plugins.PluginRight + '/'+ config.plugins.PluginRight + '.js');
}
if (config.plugins.PluginBottom != null) {
  PluginBottom = require('../plugins/' + config.plugins.PluginBottom + '/'+ config.plugins.PluginBottom + '.js');
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
            <PluginTop pluginInfo={config.plugins}  mycroftInfo={this.props.mycroft} />
          </div>
        </div>
        <div className='row'>
          <div className='PluginZone-Left col-xs-12 col-md-3'>
            <PluginLeft pluginInfo={config.plugins} mycroftInfo={this.props.mycroft} />
          </div>
          <div className='PluginZone-Mid col-xs-12 col-md-6'>
            <PluginMid pluginInfo={config.plugins} mycroftInfo={this.props.mycroft} />
          </div>
          <div className='PluginZone-Right col-xs-12 col-md-3'>
            <PluginRight pluginInfo={config.plugins} mycroftInfo={this.props.mycroft} />
          </div>
        </div>
        <div className='row'>
          <div className=' navbar navbar-fixed-bottom PluginZone-Bottom col-xs-12'>
            <PluginBottom pluginInfo={config.plugins} mycroftInfo={this.props.mycroft} />
          </div>
        </div>
      </div>
    );
  }
});
