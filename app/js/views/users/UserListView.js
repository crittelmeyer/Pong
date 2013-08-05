define([
  'jquery',
  'underscore',
  'backbone',
  'collections/UsersCollection',
  'text!templates/users/userListTemplate.html'
], function($, _, Backbone, UsersCollection, userListTemplate){
  var UserListView = Backbone.View.extend({
    el: '.user-list-container',
    render: function () {
      var that = this;

      /* no users at the start */
      that.getUsers();
    },

    getUsers: function() {
      var that = this;

      var users = new UsersCollection();
      users.fetch({
        success: function(users) {
          $(that.el).html(_.template(userListTemplate, {users: users.models, _:_}));
        },
        error: function(response) {
          console.log(response, "UserList error!");
        }
      });

    }

  });
  return UserListView;
});