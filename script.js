$(window).on("load", function() {
    setTimeout(function() {
        $("#greeting").css({"opacity": "1", "transition": "0.5s", "pointer-events": "fill"});
        $("#introName").css({"opacity": "1", "transition": "2.5s", "pointer-events": "fill"});
        $("#introTextParagragh").css({"opacity": "1", "transition": "3.5s", "pointer-events": "fill"});
    }, 500);
});

$(document).on("scroll", function() {
    setTimeout(function() {
    $(".skills").css({"opacity": "1", "transition": "1s", "pointer-events": "fill"});
    },500);   
});