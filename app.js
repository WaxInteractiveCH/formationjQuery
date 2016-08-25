var functionAttr = function(){

    $('.btn-attr').click(function(){
        $('.image1').attr("src", 'http://www.lorempizza.com/300/300');
    });

    $('.btn-attr2').click(function(){
        $('.image1').removeAttr("src");
    });

};


var domParse = function(){

    $('.domparse').click(function(){
        $(this).find('ul > li').css('color', 'red');
        $(this).find('ul > li:first-child').css('text-decoration', 'underline');
    });

};


var getValue = function(){
    function displayVal(){
        var singleValues = $( "#single" ).val();
        var multipleValues = $( "#multiple" ).val() || [];
        $('.get-value > p' ).html( "<b>Single:</b> " + singleValues +
            " <b>Multiple:</b> " + multipleValues.join( ", " ) );
    }

    $( "select" ).change( displayVal );
};


var eachDemo = function(){

    $('.each').click(function(){
        $( ".each > ul > li" ).each(function( index ) {
            $(this).prepend( index + ": ");
        });
    });
};

var animateDemo = function(){
    $( "#clickme" ).click(function() {
      $( "#book" ).animate({
        left: "+=50",
        height: "toggle"
    }, 5000, function() {
        alert("Fin de l'animation");
    });
  });


};


var htmlManip = function(){

    $('.htmlManip').click(function(){
        var htmlString = $( this ).html();
        $(this).text(htmlString);
        $(this).prepend('<h1> Hello World</h1>');
    });

};

functionAttr();
domParse();
htmlManip();
getValue();
eachDemo();
animateDemo();