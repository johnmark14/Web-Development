/// <reference path="../typings/globals/jquery/index.d.ts"/>

$(function() {

    $('h1').css("color", "blue");
    // click a button
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });


});