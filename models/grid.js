var aGrid = (function(){
  var instance;
  
  function init() {
    var playerGrid = Snap('#svg1');
    var computerGrid = Snap('#svg2');
    var gridSize = 25;
    var orig = {
      x: 0,
      y: 0
    };
  
    var boxes = [];
    for (var i = 0; i <= 400; i += 25) {
      for (var k = 0; k <= 400; k += 25) {
        var box = playerGrid.path('M'+ i + ',' + k + 'L' + (i+25) + ',' + k + 'L' + (i+25) + ',' + (k+25) + 'L' + i + ',' + (k+25) + ',z');
        var box2 = computerGrid.path('M'+ i + ',' + k + 'L' + (i+25) + ',' + k + 'L' + (i+25) + ',' + (k+25) + 'L' + i + ',' + (k+25) + ',z');
        attr = {
          fill: 'none',
          stroke: 'black',
          strokeWidth: 2
        };
        box.attr(attr);
        box2.attr(attr);
        boxes.push(box);
           
      }   
    }

    return {
      playerGrid: playerGrid,
      computerGrid : computerGrid
    };
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})()