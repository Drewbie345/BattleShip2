
var placeShip = function(width, type) {
  var array = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375];
  var svgId = ''
  
  if (type === 'player') {
    svgId = '#svg1';
  }
  else {
    svgId = '#svg2'
  }
  var grid = createGrid(svgId);

  if (type === 'player') {
    var x = array[util.randInt(0, 15)];
    var y = array[util.randInt(0, 15)];

    var ship = playerGrid.canvas.rect(x, y, w, 25);
    ship.drag(
      function (dx, dy, x, y, e) {
        var xSnap = Snap.snapTo(25, playerGrid.origin.x + dx, 100000000);
        var ySnap = Snap.snapTo(25, playerGrid.origin.y + dy, 100000000);
        this.attr({
          x: xSnap,
          y: ySnap
        });
      },

      function (x, y, e){
        playerGrid.origin.x = e.toElement.x.baseVal.value;
        playerGrid.origin.y = e.toElement.y.baseVal.value;
      }
    );
    return ship;
  }
  else {
    var x = array[util.randInt(0, 15)];
    var y = array[util.randInt(0, 15)];

    var x1 = x + w;
    var y1 = y + 25;
    ship = compGrid.canvas.path('M' + x + ',' + y + 'L' + x1 + ',' + y + 'L' + x1 + ',' + y1 + 'L' + x + ',' + y1 + ',z');
    ship.attr('fill', 'black');
    return ship;
  }

}

placeShip(50, 'player');
placeShip(75, 'player');
placeShip(75, 'player');
placeShip(100, 'player');
placeShip(125, 'player');

placeShip(50, 'cpu');
placeShip(75, 'cpu');
placeShip(75, 'cpu');
placeShip(100, 'cpu');
placeShip(125, 'cpu');
