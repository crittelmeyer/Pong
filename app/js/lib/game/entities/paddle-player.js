ig.module(
  'game.entities.paddle-player'
)
.requires(
  'game.entities.paddle'
)
.defines(function(){

EntityPaddlePlayer = EntityPaddle.extend({
  animSheet: new ig.AnimationSheet('img/paddle-blue.png', 64, 128),

  input: 1,

  settings: {
    speed: 300,
    maxVel: { x: 100, y: 100 }
  },

  init: function(x, y, settings) {
    this.input = settings.input;
    this.parent(x, y, settings);

    this.maxVel.x = settings.maxVel && settings.maxVel.x || this.settings.maxVel.x;
    this.maxVel.y = settings.maxVel && settings.maxVel.y || this.settings.maxVel.y;
    this.speed = settings.speed || this.settings.speed;
  },

  update: function() {
    if(ig.input.state('p' + this.input + '_up')) {
      this.vel.y = -this.speed;
    } else if (ig.input.state('p' + this.input + '_down')) {
      this.vel.y = this.speed;
    } else {
      this.vel.y = 0;
    }
    
    this.parent();
  }
});

});