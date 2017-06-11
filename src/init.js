$(document).ready(function() {
  window.dancers = [];

  var linedUp = false;
  var checkForCloseBait = function (dancerObj) {
    if(dancerObj instanceof window.MakeFightingDancer) {
      var minDistance = Infinity;
      var closestBait = null;

      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i] instanceof window.MakeBouncyDancer) { //
          var distance = 0;
          var topDistance = Math.abs(dancers[i].top - dancerObj.top);
          var leftDistance = Math.abs(dancers[i].left - dancerObj.left);
          distance = Math.sqrt(topDistance**2 + leftDistance**2);
          if (distance < minDistance) {
            minDistance = distance;
            closestBait = dancers[i];
          }
        }
      }
      if (closestBait) {
        dancerObj.setPosition(closestBait.top, closestBait.left);
      }
    }
  };


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); // MakeBlinkyDancer

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; // MakeBlinkyDancer

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.8,
      $("body").width() * Math.random() * 0.8,
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    if (linedUp) {
      dancer.lineUp();
      return;
    }
    if (dancerMakerFunctionName === 'MakeFightingDancer') {
      checkForCloseBait(dancer);
    }
    if (dancerMakerFunctionName === 'MakeBouncyDancer') {
    for (var i = 0; i < window.dancers.length; i++){
      checkForCloseBait(window.dancers[i]);
    }
  }

  });


  $('.lineUpButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
    linedUp = true;
  });

  $(document).on('mouseover', '.blinkyDancer, .blinkyDancer1', function() {
    if ($(this).hasClass('blinkyDancer')) {
      $(this).removeClass('blinkyDancer');
      $(this).addClass('blinkyDancer1');
    } else {
      $(this).removeClass('blinkyDancer1');
      $(this).addClass('blinkyDancer');
    }
  });
});

