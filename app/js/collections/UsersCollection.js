define([
  'jquery',
  'underscore',
  'backbone',
  'models/UserModel'
], function($, _, Backbone, UserModel){
  var UsersCollection = Backbone.Collection.extend({
    model: UserModel,
      url: 'http://localhost:8888/users'
  });

  return UsersCollection;
});