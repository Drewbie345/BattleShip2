var createGrid = function(canvasId){
  var s = Snap(canvasId);
  var gridSize = 25;
  var orig = {
    x: 0,
    y: 0
  };

  var boxes = [];
  for (var i = 0; i <= 400; i += 25) {
    for (var k = 0; k <= 400; k += 25) {
      var box = s.path('M'+ i + ',' + k + 'L' + (i+25) + ',' + k + 'L' + (i+25) + ',' + (k+25) + 'L' + i + ',' + (k+25) + ',z');
      box.attr({
        fill: 'none',
        stroke: 'black',
        strokeWidth: 2
      })
      boxes.push(box);
      
    }
    
  }
  return {
    canvas: s,
    gridSize: gridSize,
    origin: orig,
    boxes: boxes
  }
}