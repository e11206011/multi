$(document).ready(function(){
     
    let $lu = $(".nav_list"), $menu =$(".nav_menu");

    $menu.click(function(){
        $lu.toggleClass("nav_menu_click");
    });
    
});