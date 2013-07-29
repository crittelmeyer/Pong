define([
  'jquery',
  'underscore',
  'backbone',
  'views/MainView', 
  'views/high_scores/HighScoresView'
], function ($, _, Backbone, MainView, HighScoresView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction',
      'scores': 'showMessageAboutMongo', // All urls will trigger this route
      'about': 'showAbout' 
    }
  });

  var initialize = function() {
    //var vent = _.extend({}, Backbone.Events);
    var router = new MainRouter();

    console.log("MainRouter / initialize");

		router.on('route:defaultAction', function (actions) {
      var mainView = new MainView();
      mainView.render();

      var highScoresView = new HighScoresView();
      highScoresView.render();

      console.log("default route");
		});

    router.on('route:showMessageAboutMongo', function () {
      console.log("display helpful message about setting up mongo");
    });

    router.on('route:showAbout', function () {
      console.log("display about");        
    });

    Backbone.history.start();
    
  };
  return {
    initialize: initialize
  };
});