define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var ScoreModel = Backbone.Model.extend({
      url: 'http://localhost:8888/scores'
  });
  return ScoreModel;
});