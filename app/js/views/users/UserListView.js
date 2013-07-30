define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ScoresCollection',
  'text!templates/users/userListTemplate.html'
], function($, _, Backbone, ScoresCollection, userListTemplate){
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
          console.log(users);
          $(that.el).html(_.template(userListTemplate, {users: users.models, _:_}));

          console.log(that.el);
        },
        error: function(response) {
          console.log(response, "UserList error!");
        }
      });

    }

  });
  return UserListView;
});