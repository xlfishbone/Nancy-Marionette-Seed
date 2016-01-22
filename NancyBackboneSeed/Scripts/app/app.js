var Marionette = require('backbone.marionette'),
    Backbone = require('backbone'),
    router = require('./router'),
    master = require('./layout/masterView.js'),
    app;

app = new Marionette.Application({
    onStart: function () {

        var lv = new master();
        lv.render();

        var rn = new router;

        Backbone.history.start();

        
    }
});


module.exports = app;   