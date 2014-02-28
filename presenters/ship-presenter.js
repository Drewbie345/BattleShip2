$(document).ready(function(){


    ships.placeShip(1, 1, 2, 'player');
    ships.placeShip(4, 4, 3, 'player');
    ships.placeShip(6, 3, 3, 'player');
    ships.placeShip(4, 8, 4, 'player');
    ships.placeShip(9, 9, 5, 'player');

    var values = [];
    for (var i = 0; i < 5; i++) {
      var x = util.randInt(0, 15);
      var y = util.randInt(0, 15);
      values.push([x, y]);
    }


    ships.placeShip(values[0][0], values[0][1], 2, 'cpu');
    ships.placeShip(values[1][0], values[1][1], 3, 'cpu');
    ships.placeShip(values[2][0], values[2][1], 3, 'cpu');
    ships.placeShip(values[3][0], values[3][1], 4, 'cpu');
    ships.placeShip(values[4][0], values[4][1], 5, 'cpu');


  $('#button').click(function(e){
    e.preventDefault();
    ships.undragPlayerShips();
    console.log(ships.availableComputerSpace);
  })
})
    