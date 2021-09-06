$(function(){
        
    $('button').click(function(){

        const rectangle = $('div');

        rectangle.animate({marginLeft: '100px', width: '100px', height: '100px'}, 3000, function(){
           
            rectangle.stop().animate({backgroundColor:'blue'}, 5000, function(){

                $('div').html('<h2>Animacja zakończona</h2>');
            });            
        });
    });
});