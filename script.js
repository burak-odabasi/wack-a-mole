let main;
let difficultyLevel;
let moleType;
let gameActive;

const startGame = function () {
  if (difficultyLevel) {
    gameActive = true;
    main = document.querySelector("main");
    main.classList.add("gamestartcontainer");
    main.innerHTML = `     
    <p id="scoreDiv">
    <span>
      <span id="scoreP"
        >TargetsHit:<span id="accTargets">0</span>/<span id="totTargets"
          >0</span
        ></span>
    </span>
    <span>
    AccurateClicks:<span id="accClicks">0</span>/<span id="totClicks"
      >0</span>
  </span>
  </p>
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
  <span class="gamebottom">
    <h3>Time:15</h3>
    <button class="returnmain">
    <img src="./images/homebutton.png" alt="" style="width: 3.4rem" />
  </button>
  </span>
  `;
    let accTargets = document.getElementById("accTargets");
    let totTargets = document.getElementById("totTargets");
    let accClicks = document.getElementById("accClicks");
    let totClicks = document.getElementById("totClicks");
    accTargets.innerHTML = 0;
    totTargets.innerHTML = 0;
    accClicks.innerHTML = 0;
    totClicks.innerHTML = 0;
    let moleHere;
    //----------------------------------------------------
    // the function that creates a new mole at a random spot and then removes it after x seconds based on difficulty
    let molePopUp = function () {
      if (gameActive === true) {
        ++totTargets.textContent;
        let randomNumber = Math.floor(Math.random() * 28) + 1; //+1 so cell isnt 00
        let squareClass = `.cell0` + randomNumber;
        moleHere = document.querySelector(squareClass);
        moleType = difficultyLevel + "mole";
        moleHere.classList.add(moleType);
        if (difficultyLevel === "easy") {
          setTimeout(function () {
            moleHere.classList.remove(moleType);
          }, 1500);
        } else if (difficultyLevel === "normal") {
          setTimeout(function () {
            moleHere.classList.remove(moleType);
          }, 750);
        } else if (difficultyLevel === "hard") {
          setTimeout(function () {
            moleHere.classList.remove(moleType);
          }, 500);
        } else {
          setTimeout(function () {
            moleHere.classList.remove(moleType);
          }, 325);
        }
      }
    };
    //----------------------------------------------------
    // call a new mole every x seconds depending on difficulty
    let moleIntervalId;
    if (difficultyLevel === "easy") {
      moleIntervalId = setInterval(molePopUp, 1700);
    } else if (difficultyLevel === "normal") {
      moleIntervalId = setInterval(molePopUp, 800);
    } else if (difficultyLevel === "hard") {
      moleIntervalId = setInterval(molePopUp, 550);
    } else {
      moleIntervalId = setInterval(molePopUp, 350);
    }
    //----------------------------------------------------
    // create a timer and a function to count down
    let timer = 14;
    let gameClock = main.querySelector("h3");

    const countDown = () => {
      gameClock.innerText = `Time:${timer}`;
      timer--;
      if (timer < 0) {
        clearInterval(intervalId);
        clearInterval(moleIntervalId);
      }
    };
    const intervalId = setInterval(countDown, 1000);

    //----------------------------------------------------
    // the function called when a mole is clicked
    let tryHit = function () {
      main = document.querySelector("main");
      main.classList.add("hammerdown");
      setTimeout(function () {
        main.classList.remove("hammerdown");
      }, 300);
      console.log("trying hit");
      let thisTry = "hit";
      let prevHit = document.querySelector(".hit");
      let prevMiss = document.querySelector(".miss");
      if (prevHit) {
        prevHit.classList.remove("hit");
      } else if (prevMiss) {
        prevMiss.classList.remove("miss");
      }
      moleHere.classList.replace(moleType, "hit");
      if (thisTry === "hit") {
        ++accTargets.textContent;
        let hitSound = new Audio("./sounds/hammer.mp4");
        hitSound.play();
      } else {
        let missSound = new Audio("./sounds/digmiss.mp4");
        missSound.play();
      }
    };
    //----------------------------------------------------
    //only fire tryhit function when the target contains a moletype class

    let clickTracklistener = function (event) {
      if (event.target.classList.contains(moleType)) {
        tryHit();
        ++accClicks.innerText;
        ++totClicks.innerText;
      } else {
        ++totClicks.innerText;
      }
    };
    document.addEventListener("mousedown", clickTracklistener);

    setInterval(() => {
      document.removeEventListener("mousedown", clickTracklistener);
    }, 15000);
    //----------------------------------------------------
    //Remove the main menu when the game starts.
    let mainDiv = document.querySelector("div");
    mainDiv.classList.remove("startscreen");
    mainDiv.innerHTML = ``;
    //----------------------------------------------------
    //add functionality to home button
    let goHome = function () {
      gameActive = false;
      let main = document.querySelector("main");
      main.classList.remove("gamestartcontainer");
      main.innerHTML = ``;
      mainMenu();
    };

    homeBtn = document.querySelector("button.returnmain");
    homeBtn.addEventListener("click", goHome);
  }
};

const mainMenu = function () {
  let mainDiv = document.querySelector("div");
  mainDiv.classList.add("startscreen");
  mainDiv.innerHTML = `
  <div class="title">
  <h1>Wack A Mole</h1>
  <p>Test your clicking acuracy!</p>
</div>
<div class="difficulty">
  <p>Select Difficulty</p>
  <div class="theMoles">
    <div class="aMole easy">
      <img src="./images/homeeasy.png" alt="" style="width: 6rem" />
      <button id="easyid">Easy</button>
    </div>
    <div class="aMole normal">
      <img src="./images/homenormal.png" alt="" style="width: 6rem" />
      <button id="normalid">Normal</button>
    </div>
    <div class="aMole hard">
      <img src="./images/homehard.png" alt="" style="width: 6rem" />
      <button id="hardid">Hard</button>
    </div>
    <div class="aMole insane">
      <img src="./images/homeinsane.png" alt="" style="width: 6rem" />
      <button id="insaneid">Insane</button>
    </div>
  </div>
  <div class="startButtons">
    <button>I'm Ready</button>
  </div>
</div>
  `;
  const startButton = document.querySelector(".startButtons button");
  startButton.addEventListener("click", startGame);

  const easyButton = document.querySelector("#easyid");
  const normalButton = document.querySelector("#normalid");
  const hardButton = document.querySelector("#hardid");
  const insaneButton = document.querySelector("#insaneid");
  const difficultyButtons = [
    easyButton,
    normalButton,
    hardButton,
    insaneButton,
  ];
  const easyImage = document.querySelector(".aMole.easy");
  const normalImage = document.querySelector(".aMole.normal");
  const hardImage = document.querySelector(".aMole.hard");
  const insaneImage = document.querySelector(".aMole.insane");
  const difficultyImages = [easyImage, normalImage, hardImage, insaneImage];

  const toggleDifficulty = (event) => {
    const button = event.currentTarget.querySelector("button");
    difficultyLevel = button.innerText.toLowerCase();
    difficultyButtons.forEach((button) => {
      button.classList.remove(`${button.innerText.toLowerCase()}Select`);
    });
    button.classList.toggle(`${difficultyLevel}Select`);
  };

  difficultyImages.forEach((image) => {
    image.addEventListener("click", toggleDifficulty);
  });
};

mainMenu();
