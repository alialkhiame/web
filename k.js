
"use strict";

var elem = document.getElementById("myDiv");
var dragging = true;
var lastX, lastY;


elem.addEventListener("onmousedown", function (evt) {
    if (dragging) {
        console.log("asd1");
        var style = window.getComputedStyle(elem, null);
        
        var x = evt.clientX;
        var y = evt.clientY;
        var dx = x - lastX;
        var dy = y - lastY;
        var posx = parseInt(style.getPropertyValue("left"));
        var posy = parseInt(style.getPropertyValue("top"));
        elem.style.left = (posx + dx) + "px";
        elem.style.top = (posy + dy) + " px";

        lastX = x;
        lastY = x;
    
    }
}, false);
elem.addEventListener("mousemove", function (evt) {
    
    if (dragging) {
        console.log("asd1");
        var style = window.getComputedStyle(elem, null);
        
        var x = evt.clientX;
        var y = evt.clientY;
        var dx = x - lastX;
        var dy = y - lastY;
        var posx = parseInt(style.getPropertyValue("left"));
        var posy = parseInt(style.getPropertyValue("right"));
        elem.style.left = (posx + dx) + "px";
        elem.style.top = (posy + dy) + " px";

        lastX = x;
        lastY = x;
    
    }

}, false);









elem.addEventListener("onmouseup", function (evt) {
    dragging = true;
    console.log("asd12");
});

