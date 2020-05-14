// TRARGET UI ELEMENT FOR WORK
const game = document.getElementById("game"),
  minValue = document.getElementById("min"),
  maxValue = document.getElementById("max"),
  luckInput = document.getElementById("input-fild"),
  luckBtn = document.getElementById("btn"),
  messageDiv = document.getElementById("message-div"),
  message = document.getElementById("message"),
  left = document.getElementById("left"),
  setBtn = document.getElementById("set-btn"),
  img = document.querySelector("img"),
  loading = document.getElementById("loading-div");

// VARIABLES DECLARATIONS
let min = parseInt(minValue.value),
  max = parseInt(maxValue.value),
  leftValue = 2,
  imgValue = Math.floor(Math.random() * 12 + 1);

// ASSIGN MIN MAX VALUE AND SO ON
setBtn.addEventListener("click", function () {
  // REASSINGN MIN MAX VALUE
  min = parseInt(minValue.value);
  max = parseInt(maxValue.value);

  // SET MESSAGE
  // IF MAX < MIN
  if (min > max) {
    // DISABLE LUCK INPUT
    luckInput.disabled = true;
    setMessage(
      `Your max number is lower then minimum number! Set That.`,
      `rgb(167, 167, 43)`
    );
  } else {
    // SHOW LUCK INPUT
    luckInput.disabled = false;
    setMessage(
      `Your number set up successfully completed.`,
      `rgb(98, 151, 11)`
    );
  }
});

// LEFT VALUE ASIGN
left.textContent = leftValue;

// LUCK BTN LESTENER
luckBtn.addEventListener("click", function (e) {
  loading.style.display = "block";
  messageDiv.style.display = "none";

  setTimeout(function () {
    luckCalculation();
  }, 1000);

  e.preventDefault();
});

// LUCK CALCULATION FUNCTION
function luckCalculation() {
  // INPUT LUCK VALUE ASSIGN
  let luckInputValue = parseInt(luckInput.value);

  // HIDE LOADING
  loading.style.display = "none";

  // SET WIN VALUE
  let winValue = Math.floor(Math.random() * (max - min + 1) + min);

  // DECLEAR VARIAVLE AND CHOOSE IMAGE
  let loseImg = `lose-${imgValue}`;
  let winImg = `win-${imgValue}`;

  // HIDE IMAGE 2N TIME IF THER ANY LOSE OR WIN IMAGE
  document.querySelector(`#${loseImg}`).style.display = "none";
  document.querySelector(`#${winImg}`).style.display = "none";

  // IF MAX < MIN
  if (min > max) {
    setMessage(
      `Your max number is lower then minimum number! Set That.`,
      `rgb(190, 68, 68)`
    );
  }

  // IF luckInputValue === NAN
  else if (isNaN(luckInputValue)) {
    setMessage(
      `Please enter a number between ${min} to ${max}!`,
      `rgb(167, 167, 43)`
    );
  }

  // IF luckInputValue > MINVALUE
  else if (luckInputValue < min) {
    setMessage(
      `Your number is less! It should be >= ${min}`,
      `rgb(167, 167, 43)`
    );
  }

  // IF luckInputValue > MAXVALUE
  else if (luckInputValue > max) {
    setMessage(
      `Your number is high! It should be <= ${max}`,
      `rgb(167, 167, 43)`
    );
  }

  // IF luckInputValue === WININGNUMBER
  else if (luckInputValue === winValue) {
    // YOU WIN
    winLoseOver(
      "rgb(98, 151, 11)",
      `${winValue} is Correct. YOU LUCKY! Fun with me...`
    );

    // SHOWING RANDOM IMAGE
    document.querySelector(`#${winImg}`).style.display = "block";
    document.querySelector(`#${loseImg}`).style.display = "none";
    // REMOVE IMAGE WITH LUCK INPUT
    luckInput.addEventListener("keydown", function () {
      document.querySelector(`#${winImg}`).style.display = "none";
      messageDiv.style.display = "none";
    });
  } else if (
    luckInputValue != NaN &&
    luckInputValue <= max &&
    luckInputValue >= min &&
    luckInputValue != winValue &&
    min <= max
  ) {
    // YOU LOSE
    winLoseOver(
      "rgb(190, 68, 68)",
      `YOU LOSE! Don't worry try again. Win number was: ${winValue}`
    );

    // SHOWING RANDOM IMAGE
    document.querySelector(`#${loseImg}`).style.display = "block";
    document.querySelector(`#${winImg}`).style.display = "none";
    // REMOVE IMAGE WITH LUCK INPUT
    luckInput.addEventListener("keydown", function () {
      document.querySelector(`#${loseImg}`).style.display = "none";
      messageDiv.style.display = "none";
    });
  }
}

// WIN-LOSE-GAMEOVER FUNTION
function winLoseOver(bgColor, mage) {
  // DISPLAY SHOW
  messageDiv.style.display = "block";

  // BACKGROUND BGCOLOR
  messageDiv.style.background = bgColor;

  // MESSAGE SHOWING
  message.textContent = mage;

  // LEFTVALUE INCREMENT AND DISABLE SOME INPUT
  if (leftValue > 0) {
    left.textContent -= 1;
    leftValue -= 1;

    // // WHEN LEFTVALUE WILL DISABLE MINMAX, SET
    minValue.disabled = true;
    maxValue.disabled = true;
    setBtn.disabled = true;
  }

  // GAME OVER
  if (leftValue == 0) {
    // DISABLE LUCK INPUT
    luckInput.disabled = true;

    // CHANGE VALUE AND RELOAD
    luckBtn.value = "Play Again";
    // luckBtn.style.background = "rgb(190, 68, 68)";
    left.style.background = "rgb(190, 68, 68)";

    luckBtn.addEventListener("click", function () {
      window.location.reload();
    });
  }
}

// SETMESSAGE FUNCTION
function setMessage(meg, color) {
  message.textContent = meg;
  messageDiv.style.display = "block";
  messageDiv.style.background = color;
  messageDiv.style.borderRadius = "15px";

  // Time Out
  setTimeout(function () {
    messageDiv.style.display = "none";
  }, 2000);
}
