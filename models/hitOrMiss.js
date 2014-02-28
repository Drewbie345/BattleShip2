(function(){

  window.guess = {

    explosion: function(x, y, canvas) {
      var fire = canvas.rect(x, y, 25, 25);
      fire.attr('fill', '#ff8822');
    },

    miss: function(x, y, canvas) {
      var missed = canvas.rect(x, y, 25, 25);
      missed.attr('fill', 'white');
    },

    comparePositions: function(){


    },



  }

})();