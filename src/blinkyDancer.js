// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
//
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//
//   var oldStep = blinkyDancer.step;
//
//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };
//
//   return blinkyDancer;
// };

var MakeBlinkyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  var rand = Math.random();
  if (rand > 0.5) {
    this.$node = $('<span class="blinkyDancer"></span>');
  } else {
    this.$node = $('<span class="blinkyDancer1"></span>');
  }
  this.setPosition(top, left);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.lineUp = function () {
  this.setPosition(this.top, 1000);
  for (var i = 0; i < timeoutVarArr.length; i++) {
    clearTimeout(timeoutVarArr[i]);
  }
  this.$node.css('display', 'block');
};