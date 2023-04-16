// Use the css() function to set the progress bar bg color to red
$("#red").click(function(){
    $("#progress").css("background-color","red")
});

// Use the css() function to set the progress bar bg color to blue
$("#blue").click(function(){
    $("#progress").css("background-color","blue")
});

// Use the css() function to set the progress bar bg color to green
$("#green").click(function(){
    $("#progress").css("background-color","green")
});

// Trigger the progress bar to start
$("#start").click(function(){
    $("#progress").css("width","12%")
    .delay(1500)
    .animate({width:"25%"},500)
    .delay(1500)
    .animate({width:"50%"},500)
    .delay(1500)
    .animate({width:"75%"},500)
    .delay(1500)
    .animate({width:"99%"},500)
    .delay(10000)
    /*
    TODO:Insert rickroll
    */
   
   $("#percentage").html("0%")
   .delay(2000)
   .queue(function(next){
    $(this).html("25%");
    next();
   })
   .delay(2000)
   .queue(function(next){
    $(this).html("50%");
    next();
   })
   .delay(2000)
   .queue(function(next){
    $(this).html("75%");
    next();
   })
   .delay(2000)
   .queue(function(next){
    $(this).html("99%");
    next();
   })

})