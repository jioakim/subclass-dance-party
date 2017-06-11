var MakeFightingDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fightingDancer"></span>');
  this.setPosition(top, left);

};

MakeFightingDancer.prototype = Object.create(MakeDancer.prototype);
MakeFightingDancer.prototype.constructor = MakeFightingDancer;

MakeFightingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.toggle();
};

MakeFightingDancer.prototype.lineUp = function () {
  this.$node.css('animation', 'none');
  this.setPosition(this.top, 500);
};