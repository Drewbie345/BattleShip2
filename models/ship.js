(function () {

  var Ship = function () {

    this.playerShips = [];

    this.computerShips = [];

    this.placeGrids = function(canvasId) {
      var grid = grids.createGrid(canvasId);
      return grid;
    }

    this.playerGrid = this.placeGrids('#svg1');

    this.computerGrid = this.placeGrids('#svg2');

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

    this.availableComputerSpace = this.createAvailableSpaces();

    this.undragPlayerShips = function() {
      for (var i = 0; i < this.playerShips.length; i++) {
        this.playerShips[i].undrag();
        var shipCoords = util.convertToPath(this.playerShips[i]);
        var newShip = util.drawPathFromCoordinates(shipCoords);
      }
    }

    this.outOfBounds = function() {
      for (var i = 0; i <= this.playerShips.length; i++) {
        var xValue = this.placeShips[i].x;
        var yValue = this.placeShips[i].y;
      }
    }

    this.placePlayerShip = function(x, y, width) {
      var ship;

      var grid = this.playerGrid.canvas;
    
        if (this.availablePlayerSpace[x + ',' + y] === false) {
          this.availablePlayerSpace[x + ',' + y] = true; 
          
          var playerShipGroup = grid.group();
          
          for (var i = 0; i < width; i++){
            playerShipGroup.add(grid.rect((x * 25), (y * 25), 25, 25));   
            x++;
          }
          playerShipGroup.drag(
            function (dx, dy, x, y, e) {
              var xSnap = Snap.snapTo(25, grid.origin.x + dx, 100000000);
              var ySnap = Snap.snapTo(25, grid.origin.y + dy, 100000000);

              x = 0;
              var max = 400;
              for (var i = 0; i < width; i += 1) {                
                  this[i].attr({
                    x: xSnap,
                    y: ySnap
                  });
              }
               xSnap += 25;              
              }  
            },

            function (x, y, e){
              grid.origin.x = e.toElement.x.baseVal.value;
              grid.origin.y = e.toElement.y.baseVal.value;
            }
          );
        }
        this.playerShips.push(playerShipGroup);
        
        return {
          playGrid: grid,
          ship: ship
        }
      }
        
      this.placeComputerShip = function(x, y, width) {
        var ship;
        var grid = this.computerGrid.canvas;

        if (this.availableComputerSpace[x + ',' + y] === false && this.availableComputerSpace[(x + width) + ',' + y] === false) {
          this.availableComputerSpace[x + ',' + y] = true;
          this.availableComputerSpace[(x + width) + ',' + y] = true;
          var computerShipGroup = grid.group();

          for (var i = 0; i < width; i++) {
            computerShipGroup.add(grid.rect((x * 25), (y * 25), 25, 25));
            x++;
          }

          this.computerShips.push(computerShipGroup);
        } else {
          console.log("I'm overlapping!");
          x = util.randInt(0, 15);
          y = util.randInt(0, 15);
          this.placeComputerShip(x, y, width, 25);
        }
          return {
          compGrid: grid,
          ship: ship
        }
      } 
    };

  window.ships = new Ship();
})();