define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ScoresCollection',
  'text!templates/highScores/highScoreListTemplate.html'
], function($, _, Backbone, ScoresCollection, highScoreListTemplate){
  var HighScoreListView = Backbone.View.extend({
    el: '.highScore-list-container',
    render: function () {
      var that = this;
     
      /* no scores at the start */
      that.Scores();
    },

    getScores: function() {
      var that = this;

      var scores = new ScoresCollection();
      scores.fetch({
        success: function(scores) {
          $(that.el).html(_.template(highScoreListTemplate, {scores: scores.models, _:_}));
        },
        error: function(response) {
            console.log(response, "HighScoreList error!");
        }
      });

    }

  });
  return HighScoreListView;
});