define([
  'jquery',
  'underscore',
  'backbone',
  'views/high_scores/HighScoreFormView',
  'views/high_scores/HighScoreListView',
  'text!templates/highScores/highScoresTemplate.html'
], function($, _, Backbone, HighScoreFormView, HighScoreListView, highScoresTemplate){
  
  var HighScoresView = Backbone.View.extend({
    el: '.page',
    
    render: function () {
      $(this.el).html(highScoresTemplate);
      
      // Create new Backbone views using the view manager (does some extra goodies);
      var highScoreFormView = new HighScoreFormView();
      highScoreFormView.render();
      
      var highScoreListView = new HighScoreListView();
      highScoreListView.render();
      
      highScoreFormView.on('submitScore', function () {
        highScoreListView.render();
      });
      
    }
  });

  return HighScoresView;
  
});