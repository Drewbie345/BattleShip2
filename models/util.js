(function () {

  window.util = {
    // Generate random numbers
    randInt: function(minVal, maxVal) {
      var rInt = minVal + (Math.random() * (maxVal - minVal));
      return Math.round(rInt);
    }
  };

  
})();
