$(document).ready(function(){

    $(".slideDown").click(function(){
        $(".panel").fadeIn("slow");
        
    });
    $(".slideUp").click(function(){
         
        $(".panel").fadeOut("fast");
    });

    $(".alt-nav > ul > li").click(function(){
        alert("dd1");
        $(this).child("ul").slideDown();
        $(this).first-child("ul").slideDown();
         
        alert("dd");

    });

    $(".ui-close").click(function(){
        alert($(this).parents(".ui-message").data("title"));
        $(this).parents(".ui-message").fadeOut();
    });

});