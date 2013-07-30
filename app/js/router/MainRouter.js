define([
  'jquery',
  'underscore',
  'backbone',
  'views/MainView', 
  'views/users/UsersView',
  'views/scores/ScoresView'
], function ($, _, Backbone, MainView, UsersView, ScoresView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction',
      'scores': 'showScore'
    }
  });

  var initialize = function() {
    //var vent = _.extend({}, Backbone.Events);
    var router = new MainRouter();

    console.log("MainRouter / initialize");

		router.on('route:defaultAction', function (actions) {
      var mainView = new MainView();
      mainView.render();

      var UsersView = new UsersView();
      UsersView.render();

      console.log("default route");
		});

    router.on('route:showScore', function (actions) {
      var mainView = new MainView();
      mainView.render();

      var ScoresView = new ScoresView();
      ScoresView.render();
    });

    Backbone.history.start();
    
  };
  return {
    initialize: initialize
  };
});