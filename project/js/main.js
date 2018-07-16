"use strict";

var sliderImages = document.querySelectorAll(".slide");
var arrowRight = document.querySelector("#arrow-right");
var arrowLeft = document.querySelector("#arrow-left");
var current = 0;

// function to display my images to none (clear all images)
function reset() {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

// show Prev