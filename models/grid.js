var createGrid = function(canvasId){
  var s = Snap(canvasId);
  var gridSize = 25;
  var orig = {
    x: 0,
    y: 0
  };

  for (var i = 0; i <= 375; i += 25) {
    for (var k = 0; k <= 400; k += 25) {
      var m = 25 + i;
      var box = s.path('M'+ i +',' + k + 'L' + m + ',' + k + 'L' + m + ',' + m + 'L' + i + ',' + m + ',z');
      box.attr({
        fill: 'none',
        stroke: 'black',
        strokeWidth: 2
      })
    }
  }
  return {
    canvas: s,
    gridSize: gridSize,
    origin: orig
  }
}