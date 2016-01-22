var Marionette = require("backbone.marionette"),
    Radio = require("backbone.radio")
    //homeView = require("./brochure/homeView"),


var navChannel = Radio.channel('nav');

module.exports = Marionette.AppRouter.extend({


  /* "path": "function" */
  routes : {
      "/": "home",
      "Brochure": "home",
      "*actions": "home"
  },
     
  home : function(){    
      //navChannel.trigger("nav:navigate", {view: homeView});
  }

});