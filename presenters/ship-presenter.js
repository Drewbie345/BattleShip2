$(document).ready(function(){


    ships.placeShip(50, 'player');
    ships.placeShip(75, 'player');
    ships.placeShip(75, 'player');
    ships.placeShip(100, 'player');
    ships.placeShip(125, 'player');

    ships.placeShip(50, 'cpu');
    ships.placeShip(75, 'cpu');
    ships.placeShip(75, 'cpu');
    ships.placeShip(100, 'cpu');
    ships.placeShip(125, 'cpu');


  $('#button').click(function(e){
    e.preventDefault();
    ships.undragPlayerShips();
  })
})
    