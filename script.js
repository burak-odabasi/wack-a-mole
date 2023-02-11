startGame = function () {
  let main = document.querySelector("main");
  main.classList.add("gamestartcontainer");
  main.innerHTML = `     
  <h3>WACK A MOLE!</h3>
  <ul class="grid">
    <li class="cell cell01"></li>
    <li class="cell cell02"></li>
    <li class="cell cell03"></li>
    <li class="cell cell04"></li>
    <li class="cell cell05"></li>
    <li class="cell cell06"></li>
    <li class="cell cell07"></li>
    <li class="cell cell08"></li>
    <li class="cell cell09"></li>
    <li class="cell cell010"></li>
    <li class="cell cell011"></li>
    <li class="cell cell012"></li>
    <li class="cell cell013"></li>
    <li class="cell cell014"></li>
    <li class="cell cell015"></li>
    <li class="cell cell016"></li>
    <li class="cell cell017"></li>
    <li class="cell cell018"></li>
    <li class="cell cell019"></li>
    <li class="cell cell020"></li>
    <li class="cell cell021"></li>
    <li class="cell cell022"></li>
    <li class="cell cell023"></li>
    <li class="cell cell024"></li>
    <li class="cell cell025"></li>
    <li class="cell cell026"></li>
    <li class="cell cell027"></li>
    <li class="cell cell028"></li>
  </ul>
  <p>Score:<span>0</span></p>
  `;
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
    }, 550);
  };
  setInterval(molePopUp, 600);
  //----------------------------------------------------
  let tryHit = function () {
    main = document.querySelector("main");
    main.classList.add("hammerdown");
    setTimeout(function () {
      main.classList.remove("hammerdown");
    }, 300);
    console.log("trying hit");
    // const tryArray = ["hit", "miss"];
    // let thisTry = tryArray[Math.floor(Math.random() * 2)];
    let thisTry = "hit";
    let prevHit = document.querySelector(".hit");
    let prevMiss = document.querySelector(".miss");
    if (prevHit) {
      prevHit.classList.remove("hit");
    } else if (prevMiss) {
      prevMiss.classList.remove("miss");
    }
    moleHere.classList.replace("mole", "hit");
    if (thisTry === "hit") {
      ++score.textContent;
      let hitSound = new Audio("./sounds/hammer.mp4");
      hitSound.play();
    } else {
      let missSound = new Audio("./sounds/digmiss.mp4");
      missSound.play();
    }
  };

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("mole")) {
      tryHit();
    }
  });
};

let gameMode;

startGame();
// main.classList.toggle("container");
// main.classList.toggle("container");
