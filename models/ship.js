(function () {
  
  var Ship = function () {

    this.playerShips = [];

    this.computerShips = [];

    this.undragPlayerShips = function(){
      for (var i = 0; i < this.playerShips.length; i++) {
        this.playerShips[i].undrag();
      }
    },

    this.placeShip = function(width, type) {
      var ship;
      var array = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375];
      var svgId = '';
      
      if (type === 'player') {
        svgId = '#svg1';
      }
      else {
        svgId = '#svg2'
      }
      var grid = createGrid(svgId);
      var x = array[util.randInt(0, 15)];
      var y = array[util.randInt(0, 15)];

      if (type === 'player') {
        ship =  grid.canvas.rect(x, y, width, 25);
        ship.drag(
          function (dx, dy, x, y, e) {
            var xSnap = Snap.snapTo(25, grid.origin.x + dx, 100000000);
            var ySnap = Snap.snapTo(25, grid.origin.y + dy, 100000000);
            this.attr({
              x: xSnap,
              y: ySnap
            });
          },

          function (x, y, e){
            grid.origin.x = e.toElement.x.baseVal.value;
            grid.origin.y = e.toElement.y.baseVal.value;
          }
        );
        this.playerShips.push(ship);
      }
      else {
        var x1 = x + width;
        var y1 = y + 25;
        ship = grid.canvas.path('M' + x + ',' + y + 'L' + x1 + ',' + y + 'L' + x1 + ',' + y1 + 'L' + x + ',' + y1 + ',z');
        ship.attr('fill', 'black');
        this.computerShips.push(ship);
      }

      return {
        grid: grid,
        ship: ship
      }
    };
  };

  window.ships = new Ship();

})();