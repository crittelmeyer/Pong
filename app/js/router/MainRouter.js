// define([
//   'jquery',
//   'underscore',
//   'backbone',
//   'views/MainView', 
//   'views/users/UsersView',
//   'views/scores/ScoresView'
// ], function ($, _, Backbone, MainView, UsersView, ScoresView) {
  
//   var MainRouter = Backbone.Router.extend({
//     routes: {
//       '*actions': 'defaultAction',
//       'scores': 'showScore'
//     }
//   });

//   var initialize = function() {
//     //var vent = _.extend({}, Backbone.Events);
//     var router = new MainRouter();

//     console.log("MainRouter / initialize");

// 		// router.on('route:defaultAction', function (actions) {
//   //     var mainView = new MainView();
//   //     mainView.render();

//   //     var UsersView = new UsersView();
//   //     UsersView.render();

//   //     console.log("default route");
// 		// });

//     router.on('route:defaultAction', function (actions) {
//       var mainView = new MainView();
//       mainView.render();

//       var ScoresView = new ScoresView();
//       ScoresView.render();
//     });

//     Backbone.history.start();
    
//   };
//   return {
//     initialize: initialize
//   };
// });



define([
  'jquery',
  'underscore',
  'backbone',
  'views/UserAdminView',
  'views/ScoreAdminView',
  'views/users/UsersView',
  'views/scores/ScoresView'
], function ($, _, Backbone, UserAdminView, ScoreAdminView, UsersView, ScoresView) {
  
  var MainRouter = Backbone.Router.extend({
    routes: {
      '/scores': 'showScores',
      '/users': 'showUsers',
      '*actions': 'defaultAction'
    }
  });

  var initialize = function() {
    _.templateSettings = {
      evaluate : /\{\[([\s\S]+?)\]\}/g,
      interpolate : /\{\{([\s\S]+?)\}\}/g
    };
    
    //var vent = _.extend({}, Backbone.Events);
    var router = new MainRouter();

    console.log("MainRouter / initialize");

    router.on('route:showScores', function () {
      var scoreAdminView = new ScoreAdminView();
      scoreAdminView.render();

      var scoresView = new ScoresView();
      scoresView.render();
    });

    router.on('route:showUsers', function () {
      var userAdminView = new UserAdminView();
      userAdminView.render();

      var usersView = new UsersView();
      usersView.render();
    });

    router.on('route:defaultAction', function (actions) {
      console.log("default route", actions);
    });

    Backbone.history.start();
    
  };
  return {
    initialize: initialize
  };
});