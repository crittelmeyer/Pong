define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/mainTemplate.html' 
], function($, _, Backbone, mainTemplate){
  
  var UserAdminView = Backbone.View.extend({
    el: '.container',
    initialize: function () {
      
    },
    render: function () {
			var that = this;
      $(this.el).html(mainTemplate);
		} 
	});

  return UserAdminView;
});