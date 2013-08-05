define([
  'jquery',
  'underscore',
  'backbone',
  'models/ScoreModel',
  'text!templates/scores/scoreFormTemplate.html'
], function($, _, Backbone, ScoreModel, scoreFormTemplate) {
  
  var ScoreForm = Backbone.View.extend({
    el: '.score-form-container',
    render: function () {
      $(this.el).html(scoreFormTemplate);
    },
    events: {
      'click .submit-score': 'submitScore'
    },
    
    submitScore: function() {
      var that = this;

      console.log("entering from ScoreForm");

      var scoreModel = new ScoreModel();

      scoreModel.save( { username: $('.username').val(), score: $('.score').val() }, {
        
        success: function () {
          console.log("ScoreForm success: " + scoreModel.get('score') )
          
          that.trigger('submitScore');
        },
        error: function () {
          console.log("ScoreForm error on save");
        }

      });
    }
  });

  return ScoreForm;
});