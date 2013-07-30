// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // Major libraries
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min', // https://github.com/amdjs
    backbone: 'lib/backbone-min', // https://github.com/amdjs

    // Require.js plugins
    text: 'lib/text',

    // Just a short cut so we can put our html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
    templates: '../templates'
  }

});

// Let's kick off the application

require([
  'router/MainRouter'
], function(MainRouter){
  MainRouter.initialize();

});