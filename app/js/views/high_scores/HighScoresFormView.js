define([
  'jquery',
  'underscore',
  'backbone',
  'models/ScoreModel',
  'text!templates/highScores/highScoreFormTemplate.html'
], function($, _, Backbone, ScoreModel, highScoreFormTemplate) {
  
  var HighScoreForm = Backbone.View.extend({
    el: '.highScore-form-container',
    render: function () {
      $(this.el).html(highScoreFormTemplate);
      
    },
    events: {
      'click .submit-score': 'submitScore'
    },
    
    submitScore: function() {
      var that = this;

      console.log("entering from HighScoreForm")

      var scoreModel = new ScoreModel();
      
      scoreModel.save( { score: $('.score').val() }, {
        
        success: function () {
          console.log("HighScoreForm success: " + scoreModel.get('score') )
          
          that.trigger('submitScore');
        },
        error: function () {
          console.log("HighScoreForm error on save");
        }

      });
    }
  });

  return HighScoreForm;
});