let moleHere;
let score = document.querySelector("span");

let molePopUp = function () {
  let prevSquare;
  let randomNumber = Math.floor(Math.random() * 28) + 1;
  // console.log(Math.floor(0.99 * 28) + 1);
  //the code above works because math.random exlcudes 1 but includes 0
  let squareClass = `.cell0` + randomNumber;
  moleHere = document.querySelector(squareClass);

  // prevSquare = moleHere;
  console.log("prevsquare:", prevSquare);
  console.log("moleHere:", moleHere);
  // console.log(`squareClass is:${squareClass}`);
  moleHere.classList.add("mole");
  setTimeout(function () {
    moleHere.classList.remove("mole");
  }, 800);
};
setInterval(molePopUp, 850);
molePopUp();
//----------------------------------------------------
let tryHit = function () {
  main = document.querySelector("main");
  main.classList.add("hammerdown");
  setTimeout(function () {
    main.classList.remove("hammerdown");
  }, 300);
  console.log("trying hit");
  const tryArray = ["hit", "miss"];
  let thisTry = tryArray[Math.floor(Math.random() * 2)];
  let prevHit = document.querySelector(".hit");
  let prevMiss = document.querySelector(".miss");
  if (prevHit) {
    prevHit.classList.remove("hit");
  } else if (prevMiss) {
    prevMiss.classList.remove("miss");
  }
  moleHere.classList.replace("mole", thisTry);
  if (thisTry === "hit") {
    ++score.textContent;
    let hitSound = new Audio("./sounds/hammer.mp4");
    hitSound.play();
  } else {
    let missSound = new Audio("./sounds/digmiss.mp4");
    missSound.play();
  }
  molePopUp();
};

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("mole")) {
    tryHit();
  }
});
