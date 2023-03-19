"use strict"
var interval = 1400;

// Get the elements to swap
var element1 = document.querySelector(".img1")
var element2 =  document.querySelector(".img2")
var element3 =  document.querySelector(".img3")
var element4 =  document.querySelector(".img4")
var element5 =  document.querySelector(".img5")

// Get the parent container
var parent = document.querySelector(".sec-addimg");

// Set the initial positions of the elements
var positions = [element1, element2, element3,element4,element5];

// Call the swapElements function at the specified interval
var swapInterval = setInterval(swapElements, interval);

function swapElements() {
  // Rotate the positions of the elements
 let x= positions.unshift(positions.pop());
console.log(x);
  // Swap the elements in the DOM
  parent.insertBefore(positions[0], positions[1]);
  parent.insertBefore(positions[1], positions[2]);
  parent.insertBefore(positions[2], positions[3]);
  parent.insertBefore(positions[3], positions[4]);
  parent.insertBefore(positions[4], positions[5]);
}