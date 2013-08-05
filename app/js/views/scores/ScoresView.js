define([
  'jquery',
  'underscore',
  'backbone',
  'views/scores/ScoreFormView',
  'views/scores/ScoreListView',
  'text!templates/scores/scoresTemplate.html'
], function($, _, Backbone, ScoreFormView, ScoreListView, scoresTemplate){
  
  var ScoresView = Backbone.View.extend({
    el: '.page',
    
    render: function () {
      $(this.el).html(scoresTemplate);
      
      // Create new Backbone views using the view manager (does some extra goodies);
      var scoreFormView = new ScoreFormView();
      scoreFormView.render();
      
      var scoreListView = new ScoreListView();
      scoreListView.render();
      
      scoreFormView.on('submitScore', function () {
        scoreListView.render();
      });
      
    }
  });

  return ScoresView;
});