$(document).ready(function(){


    ships.placeShip(1, 1, 2, 'player');
    ships.placeShip(4, 4, 3, 'player');
    ships.placeShip(6, 3, 3, 'player');
    ships.placeShip(4, 8, 4, 'player');
    ships.placeShip(9, 9, 5, 'player');

    ships.placeShip(3, 3, 2, 'cpu');
    ships.placeShip(3, 4, 3, 'cpu');
    ships.placeShip(6, 5, 3, 'cpu');
    ships.placeShip(4, 8, 4, 'cpu');
    ships.placeShip(10, 8, 5, 'cpu');


  $('#button').click(function(e){
    e.preventDefault();
    ships.undragPlayerShips();
    ships.overlappingShips();
    ships.repositionShips();
    console.log(ships.availablePlayerSpace)
  })
})
    