// let dirtImage = document.createElement("img");
// let hitImage = document.createElement("img");

let molePopUp = function () {
  let randomSquare = Math.floor(Math.random() * 29);
  let squareNumber = `.cell0` + randomSquare;
  console.log(squareNumber);
  let moleImage = document.createElement("img");
  moleImage.setAttribute("src", "./images/mole.png");
  let moleHere = document.querySelector(squareNumber);
  moleHere.appendChild(moleImage);
};

molePopUp();
