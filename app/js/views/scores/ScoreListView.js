define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ScoresCollection',
  'text!templates/scores/scoreListTemplate.html'
], function($, _, Backbone, ScoresCollection, scoreListTemplate){
  var ScoreListView = Backbone.View.extend({
    el: '.score-list-container',
    render: function () {
      var that = this;

      /* no scores at the start */
      that.getScores();
    },

    getScores: function() {
      var that = this;

      var scores = new ScoresCollection();
      scores.fetch({
        success: function(scores) {
          $(that.el).html(_.template(scoreListTemplate, {scores: scores.models, _:_}));
        },
        error: function(response) {
          console.log(response, "ScoreList error!");
        }
      });

    }

  });
  return ScoreListView;
});