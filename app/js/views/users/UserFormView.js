define([
  'jquery',
  'underscore',
  'backbone',
  'models/UserModel',
  'text!templates/users/userFormTemplate.html'
], function($, _, Backbone, UserModel, userFormTemplate) {
  
  var UserForm = Backbone.View.extend({
    el: '.user-form-container',
    render: function () {
      $(this.el).html(userFormTemplate);
    },
    events: {
      'click .save-user': 'saveUser'
    },
    
    saveUser: function() {
      var that = this;

      console.log("entering from UserForm")

      var userModel = new UserModel();

      userModel.save({
        username: $('.username').val(),
        password: $('.password').val(),
        streak: $('.streak').val(),
        highStreak: $('.highStreak').val()
      }, {
        success: function () {
          console.log("UserForm success: " + userModel.get('username') )
          
          that.trigger('saveUser');
        },
        error: function () {
          console.log("UserForm error on save");
        }

      });
    }
  });

  return UserForm;
});