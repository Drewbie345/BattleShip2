$(document).ready(function(){

    ships.placePlayerShip(1, 1, 2);
    ships.placePlayerShip(4, 4, 3);
    ships.placePlayerShip(6, 3, 3);
    ships.placePlayerShip(4, 8, 4);
    ships.placePlayerShip(9, 9, 5);

    var values = [];
    for (var i = 0; i < 5; i++) {
      var x = util.randInt(0, 15);
      var y = util.randInt(0, 15);
      values.push([x, y]);
    }


    ships.placeComputerShip(values[0][0], values[0][1], 2);
    ships.placeComputerShip(values[1][0], values[1][1], 3);
    ships.placeComputerShip(values[2][0], values[2][1], 3);
    ships.placeComputerShip(values[3][0], values[3][1], 4);
    ships.placeComputerShip(values[4][0], values[4][1], 5);


  $('#button').click(function(e){
    e.preventDefault();
    ships.undragPlayerShips();
    console.log(ships.availableComputerSpace);
  })
})
    