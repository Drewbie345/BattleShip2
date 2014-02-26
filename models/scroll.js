$(document).ready(function(){

  // Scrollorama Plugin code
  var scrollorama = $.scrollorama({
    blocks: '.scrollblock'
  }); 

  scrollorama.onBlockChange(function() {
        var i = scrollorama.blockIndex;
        $('#console')
          .css('display','block')
          .text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
      });

  $('#title').lettering();
  $('#title span')
        .css('display','block')
        .css('float','left');
      $('.char9').css('padding-left','6px');
  
  $('#title span').each(function() {
        scrollorama
          .animate($(this),{ duration: 400, property:'top', end: Math.random()*120-180 })
          .animate($(this),{ duration: 300, property:'rotate', start:0, end:Math.random()*720-360 });
      });

  scrollorama.animate('#title', { duration : 400, property: 'zoom', end: 8 });
  scrollorama.animate('#subtitle',{ duration: 800, property:'rotate', start:720 })

});