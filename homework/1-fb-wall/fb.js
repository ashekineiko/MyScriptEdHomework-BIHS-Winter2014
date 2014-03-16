$(document).ready(function(){

    $('#button').click(function(){
      var alu = $('#posting').val();
      
   $('#wall').append('<div id="like">' + alu + '<br><button class="like">Like</button><br><br></div>');
        
    $('.like').click(function(){
      
    $(this).text("You liked this");
    
   });
    
    });
    });