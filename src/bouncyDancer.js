var MakeBouncyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncyDancer"></span>');
  this.setPosition(top, left);
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  // MakeDancer.prototype.step.call(this);
  // this.$node.toggle();
};

MakeBouncyDancer.prototype.lineUp = function () {
  this.$node.css('animation', 'none');
  this.setPosition(this.top, 750);
};
