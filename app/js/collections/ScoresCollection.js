define([
  'jquery',
  'underscore',
  'backbone',
  'models/ScoreModel'
], function($, _, Backbone, ScoreModel){
  var ScoresCollection = Backbone.Collection.extend({
    model: ScoreModel,
      url: 'http://localhost:8888/scores'
  });

  return ScoresCollection;
});