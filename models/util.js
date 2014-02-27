(function () {

  window.util = {
    // Generate random numbers
    randInt: function(minVal, maxVal) {
      var rInt = minVal + (Math.random() * (maxVal - minVal));
      return Math.round(rInt);
    },

    convertToPath: function(rect) {
      var width = rect.getBBox().width;
      var height = rect.getBBox().height;
      var x = rect.getBBox().x;
      var y = rect.getBBox().y;
      var coordinates = [];
      coordinates.push([x, y]);
      coordinates.push([x+width, y]);
      coordinates.push([x+width, y+height]);
      coordinates.push([x, y+height]);
      return coordinates;
    },

    drawPathFromCoordinates: function(coordinates) {
      var path = 'M' + coordinates[0][0] + ", " + coordinates[0][1];
      for(var i = 1; i < coordinates.length; i++){
        path += "L" + coordinates[i][0] + ", " + coordinates[i][1];
      }
      path += ",z";
      var p = createGrid('#svg1').canvas.path(path);
      return p;
    }
  };
})();
