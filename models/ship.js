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
      
      if (type === 'player') {
        if (this.availablePlayerSpace[x + ',' + y] === false) {
          this.availablePlayerSpace[x + ',' + y] = true; 
          
          var playerShipGroup = grid.canvas.group();
          
          for (var i = 0; i < width; i++){
            playerShipGroup.add(grid.canvas.rect((x * 25), (y * 25), 25, 25));   
            x++;
          }
          playerShipGroup.drag(
            function (dx, dy, x, y, e) {
              // console.log(dx,dy,x,y,'_',grid.origin.x,grid.origin.y, this);

              // 3. Use xSnap and ySnap instead of hardcoded 0's
              var xSnap = Snap.snapTo(25, grid.origin.x + dx, 100000000);
              var ySnap = Snap.snapTo(25, grid.origin.y + dy, 100000000);

              x = 0;
              var max = 400;
              for (var i = 0; i < width; i += 1) {
                //console.log('Block:', this[i]);
                
                  this[i].attr({
                    x: xSnap,
                    y: ySnap
                  });
                // 2. Lay out x according to i
                
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
        
        
      } else {
        if (this.availableComputerSpace[x + ',' + y] === false && this.availableComputerSpace[(x + width) + ',' + y] === false) {
          this.availableComputerSpace[x + ',' + y] = true;
          this.availableComputerSpace[(x + width) + ',' + y] = true;
          var computerShipGroup = grid.canvas.group();

          for (var i = 0; i < width; i++) {
            computerShipGroup.add(grid.canvas.rect((x * 25), (y * 25), 25, 25));
            x++;
          }

          this.computerShips.push(computerShipGroup);
        } else {
          console.log("I'm overlapping!");
          x = util.randInt(0, 15);
          y = util.randInt(0, 15);
          this.placeShip(x, y, width, 25);
        }
      }
      return {
        grid: grid,
        ship: ship,
      }
    };

  };

  window.ships = new Ship();
})();