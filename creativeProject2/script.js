'use strict';

let drawColor = "black";

function colorMe(cellNum) {
    let toColor = document.getElementById(cellNum);
    toColor.style.backgroundColor = drawColor;
}


let selectedColor = "blue";
document.addEventListener("DOMContentLoaded", function(event) { 
    let container = document.getElementById("cell_container");
    document.getElementById('c0').style.backgroundColor = 'black';
    document.getElementById('c00').style.backgroundColor = 'white';
    let cells = "";
    for(let i = 0; i < 1500; ++i) {
        let cellName = "cell" + i;
        cells += "<button class='canvasCell' id='cell" + i + 
        "' style='background-color:white; width: 20px; height: 20px; border-style: solid; border-color: black; margin: 0;'" 
        + "onClick='colorMe(\"cell" + i + "\");'></button>";
    }
    container.innerHTML=cells;
});


function updateColors() {
      for (let i = 1; i < 8; i++) {
        fetch('https://x-colors.herokuapp.com/api/random')
        .then(response => response.json())
        .then(data => {
            let newColor = data.hex;
            let buttonId = "c" + i.toString();
            let currButton = document.getElementById(buttonId);
            currButton.style.backgroundColor = newColor;
            console.log(newColor);
        });

      }
}

function setColor(buttonID) {
    let selected = document.getElementById(buttonID);
    drawColor = selected.style.backgroundColor;
    return;
}

function clearCanvas() {
    var canvasCells = document.getElementsByClassName("canvasCell");
    for (var i = 0; i < canvasCells.length; i++) {
        canvasCells[i].style.backgroundColor = "white";
    }
}

function randomDesign() {
    var canvasCells = document.getElementsByClassName("canvasCell");
    for (var i = 0; i < canvasCells.length; i++) {        
        let randomNum = getRandomInt(1,8);
        let paletteId = "c";
        paletteId += randomNum.toString();
        let toCopy = document.getElementById(paletteId);
        canvasCells[i].style.backgroundColor = toCopy.style.backgroundColor;
    } 
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
