(function(){

    var nav = document.querySelector( "#nav" );

    nav.querySelector("ul").style.display = "none";

    nav.querySelector("h1").addEventListener( "click", function( event ){
        var style = nav.querySelector("ul").style;
        if (style.display == "none") {
            style.display = "block";
        } else {
            style.display = "none";
        }
        event.preventDefault();
    }, false );


})();
