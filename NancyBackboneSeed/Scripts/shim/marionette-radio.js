//In this shim
//1. Add jquery dependency to marionette 
//2. Substitute Wreqr to Backbone.Radio (https://github.com/marionettejs/backbone.radio)
//3. could substitue lodash if need be.


(function (root, factory) {
   if (typeof exports !== 'undefined') {
        var $ = require('jquery');
        var Backbone = require('backbone');
        Backbone.$ = $;
        var Marionette = require('backbone.marionette');
        var Radio = require('backbone.radio');
        var _ = require('underscore');
        module.exports = factory(Marionette, Radio, _);
    }
    else {
        factory(root.Backbone.Marionette, root.Backbone.Radio, root._);
    }
}(this, function (Marionette, Radio, _) {
    'use strict';

    Marionette.Application.prototype._initChannel = function () {
        this.channelName = _.result(this, 'channelName') || 'global';
        this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
    }

}));