define([
  'jquery',
  'underscore',
  'backbone',
  'views/users/UserFormView',
  'views/users/UserListView',
  'text!templates/users/usersTemplate.html'
], function($, _, Backbone, UserFormView, UserListView, usersTemplate) {
  
  var UsersView = Backbone.View.extend({
    el: '.page',
    
    render: function () {
      $(this.el).html(usersTemplate);
      
      // Create new Backbone views using the view manager (does some extra goodies);
      var userFormView = new UserFormView();
      userFormView.render();
      
      var userListView = new UserListView();
      userListView.render();
      
      userFormView.on('saveUser', function () {
        userFormView.clear();
        userListView.render();
      });
    }
  });

  return UsersView;
});