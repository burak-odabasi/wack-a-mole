var moleHere;

let molePopUp = function () {
  let randomSquare = Math.floor(Math.random() * 29);
  let squareNumber = `.cell0` + randomSquare;
  console.log(squareNumber);
  moleHere = document.querySelector(squareNumber);
  moleHere.classList.add("mole");
};
molePopUp();
//----------------------------------------------------

let tryHit = function () {
  console.log("trying hit");
  const tryArray = ["hit", "miss"];
  let thisTry = tryArray[Math.floor(Math.random() * 2)];

  let prevHit = document.querySelector(".hit");
  let prevMiss = document.querySelector(".miss");
  if (prevHit) prevHit.classList.remove("hit");
  if (prevMiss) prevMiss.classList.remove("miss");

  moleHere.classList.replace("mole", thisTry);
  if (thisTry === "hit") {
    let score = document.querySelector("span");
    console.log(++score.textContent);
  }
  moleHere.classList.remove("mole");

  molePopUp();
};

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("mole")) {
    tryHit();
  }
});
