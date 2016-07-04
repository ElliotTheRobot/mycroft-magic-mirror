var React = require('react');

var config = require('../config.json');

var PluginTop = require('./Blank.js');
var PluginLeft = require('./Blank.js');
var PluginMid = require('./Blank.js');
var PluginRight = require('./Blank.js');
var PluginBottom = require('./Blank.js');


module.exports = React.createClass({
  componentWillMount: function () {

    if (this.props.config.args[2] == 'mirror') {
      if (config.pluginsMirror.PluginTop != null) {
        PluginTop = require('../plugins/' + config.pluginsMirror.PluginTop + '/'+ config.pluginsMirror.PluginTop + '.js');
      }
      if (config.pluginsMirror.PluginLeft != null) {
        PluginLeft = require('../plugins/' + config.pluginsMirror.PluginLeft + '/'+ config.pluginsMirror.PluginLeft + '.js');
      }
      if (config.pluginsMirror.PluginMid != null) {
        PluginMid = require('../plugins/' + config.pluginsMirror.PluginMid + '/'+ config.pluginsMirror.PluginMid + '.js');
      }
      if (config.pluginsMirror.PluginRight != null) {
        PluginRight = require('../plugins/' + config.pluginsMirror.PluginRight + '/'+ config.pluginsMirror.PluginRight + '.js');
      }
      if (config.pluginsMirror.PluginBottom != null) {
        PluginBottom = require('../plugins/' + config.pluginsMirror.PluginBottom + '/'+ config.pluginsMirror.PluginBottom + '.js');
      }
    } else {
      if (config.pluginsDesktop.PluginTop != null) {
        PluginTop = require('../plugins/' + config.pluginsDesktop.PluginTop + '/'+ config.pluginsDesktop.PluginTop + '.js');
      }
      if (config.pluginsDesktop.PluginMid != null) {
        PluginMid = require('../plugins/' + config.pluginsDesktop.PluginMid + '/'+ config.pluginsDesktop.PluginMid + '.js');
      }
      if (config.pluginsDesktop.PluginBottom != null) {
        PluginBottom = require('../plugins/' + config.pluginsDesktop.PluginBottom + '/'+ config.pluginsDesktop.PluginBottom + '.js');
      }
    }
  },
  componentDidMount: function() {
    console.log('Plugin Config is loaded into plugin zone: ');
    console.log(config);
  },

  render: function() {
    var pluginZone;

    if (this.props.config.args[2] === 'mirror') {
      pluginZone = <div  className='PluginZone' >
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
        </div>;
    } else {
      pluginZone = <div  className='PluginZone' >
          <div className='row'>
            <div className='PluginZone-Top col-xs-12'>
              <PluginTop pluginInfo={config.plugins}  mycroftInfo={this.props.mycroft} />
            </div>
          </div>
          <div className='row'>
            <div className='PluginZone-Mid col-xs-12'>
              <PluginMid pluginInfo={config.plugins} mycroftInfo={this.props.mycroft} />
            </div>
          </div>
          <div className='row'>
            <div className=' navbar navbar-fixed-bottom PluginZone-Bottom col-xs-12'>
              <PluginBottom pluginInfo={config.plugins} mycroftInfo={this.props.mycroft} />
            </div>
          </div>
        </div>;
    }

    return pluginZone;
  }
});
