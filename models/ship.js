(function () {

  var Ship = function () {

    this.playerShips = [];

    this.computerShips = [];

    this.createAvailableSpaces = function() {
      var gridArray = [];

      for (var i = 0; i < 16; i += 1) {
        for (var k = 0; k < 16; k += 1) {
          gridArray.push([i, k]);
        }
      }

      var available = {};
      for (var i = 0; i < gridArray.length; i++) {
        available[gridArray[i]] = false;
      }
      return available;
    }

    this.availablePlayerSpace = this.createAvailableSpaces();

    this.undragPlayerShips = function() {
      for (var i = 0; i < this.playerShips.length; i++) {
        this.playerShips[i].undrag();
        var shipCoords = util.convertToPath(this.playerShips[i]);
        var newShip = util.drawPathFromCoordinates(shipCoords);
      }
    }

    this.outOfBounds = function() {

    }

    this.repositionShips = function() {

    }

    this.overlappingShips = function() {
      for (var k = 0; k < this.playerShips.length; k++) {
        for (var i = 0; i < this.playerShips.length; i++) {
          if (Snap.path.isBBoxIntersect(this.playerShips[i].getBBox(), this.playerShips[k].getBBox()) === true) {
            if (i !== k && i < k) {
              console.log("I'm overlapping!");
            }
          }    
        }
      }
    }

    this.placeShip = function(x, y, width, type) {
      var ship;
      // var playerShipsObject = this.availableSpace();
      //var computerShipsObject = this.availableSpace();
      // var array = this.gridKey();
      var svgId = '';
      
      if (type === 'player') {
        svgId = '#svg1';
      }
      else {
        svgId = '#svg2'
      }

      var grid = createGrid(svgId);
      
      // var position = this.availablePlayerSpace[util.randInt(0, 255)];
      // var x = position[0];
      // var y = position[1];
      // var blocks = width / 25;
      
      if (type === 'player') {
        
        // Check if space is available

        if (this.availablePlayerSpace[x + ',' + y] === false) {
          this.availablePlayerSpace[x + ',' + y] = true; 
          
          var shipGroup = grid.canvas.group();
          
          for (var i = 0; i < width; i++){
            shipGroup.add(grid.canvas.rect((x * 25), (y * 25), 25, 25));
          
            x++;
          }
          shipGroup.drag();
        }

        // shipGroup.drag(
        //   function (dx, dy, x, y, e) {
        //     var xSnap = Snap.snapTo(25, grid.origin.x + dx, 100000000);
        //     var ySnap = Snap.snapTo(25, grid.origin.y + dy, 100000000);
        //     this.attr({
        //       x: xSnap,
        //       y: ySnap
        //     });
        //   },

        //   function (x, y, e){
        //     grid.origin.x = e.toElement.x.baseVal.value;
        //     grid.origin.y = e.toElement.y.baseVal.value;
        //   }
        // );
        this.playerShips.push(ship);
      }
      else {
        // computerShipsObject[x,y] = true;
        x = x * 25;
        y = y * 25;
        var x1 = x + (width * 25);
        var y1 = y + 25;
        ship = grid.canvas.path('M' + x + ',' + y + 'L' + x1 + ',' + y + 'L' + x1 + ',' + y1 + 'L' + x + ',' + y1 + ',z');
        ship.attr('fill', 'black');
        this.computerShips.push(ship);
      }
      return {
        grid: grid,
        ship: ship,
        // availablePlayerSpace: playerShipsObject,
        //availableComputerSpace: computerShipsObject
      }
    };

  };

  window.ships = new Ship();
})();