$(document).ready(function(){
    // When hovering over the element with class "pop-display"
    $(".pop-display").hover(function(){
        // Show the pop-up box and its content
        $("#popup").show();
        $("#popup h3").show();
    }, function(){
        // Hide the pop-up box and its content when mouse leaves the element
        $("#popup").hide();
        $("#popup h3").hide();
    });
});
