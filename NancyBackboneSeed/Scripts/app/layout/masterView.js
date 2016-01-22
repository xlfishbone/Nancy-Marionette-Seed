var Mn = require("backbone.marionette"),
    Radio = require("backbone.radio");

var navChannel = Radio.channel('nav');

module.exports = Mn.LayoutView.extend({

    el: ".mnLayout",

    template: false,

    regions: {
        body: '.mnBodyView'
    },

    ui: {
        bodyView: '.mnBodyView'
    },

    initialize: function () {
        this.listenTo(navChannel, "nav:navigate", this.onNavigate);
    },

    onNavigate: function (navObj) {
        this.showChildView('body', new navObj.view());
    }


});