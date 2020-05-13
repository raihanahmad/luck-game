// TRARGET UI ELEMENT FOR WORK
const game = document.getElementById('game'),
  minValue = document.getElementById('min'),
  maxValue = document.getElementById('max'),
  luckInput = document.getElementById('input-fild'),
  luckBtn = document.getElementById('btn'),
  messageDiv = document.getElementById('message-div'),
  message = document.getElementById('message'),
  left = document.getElementById('left'),
  setBtn = document.getElementById('set-btn'),
  img = document.querySelector('img');

// VARIABLES DECLARATIONS
let min = minValue.value,
  max = maxValue.value,
  winValue = 3,
  leftValue = 2,
  imgValue = Math.floor(Math.random() * 12 + 1);

// ASSIGN MIN MAX VALUE AND SO ON
setBtn.addEventListener('click', function () {
  min = parseInt(minValue.value);
  max = parseInt(maxValue.value);
  setMessage(`Your number set up successfully completed.`, `rgb(98, 151, 11)`)
});

// Left
left.textContent = leftValue;

// LUCK LESTENER AND ADD
luckBtn.addEventListener('click', function (e) {
  let luckValue = parseInt(luckInput.value);

  // IF LUCKVALUE === NAN
  if (isNaN(luckValue)) {
    setMessage(`Please enter a number!`, `rgb(167, 167, 43)`);
  }

  // IF LUCKVALUE > MINVALUE
  if (luckValue < min) {
    setMessage(`Your number is less! Please check the information.`, `rgb(167, 167, 43)`);
  }

  // IF LUCKVALUE > MAXVALUE
  if (luckValue > max) {
    setMessage(`Your number is high! Check the information.`, `rgb(167, 167, 43)`);
  }

  // IF LUCKVALUE === WININGNUMBER
  if (luckValue === winValue) {
    // YOU WIN
    messageDiv.style.display = 'block';
    messageDiv.style.background = 'rgb(98, 151, 11)';
    message.textContent = `Correct. YOU WIN! Dance with me...`;
    // // DISABLE LUCK INPUT
    // luckInput.disabled = true;
    // SHOWING RANDOM IMAGE
    winImg = `win-${imgValue}`;
    document.querySelector(`#${winImg}`).style.display = 'block';
    // REMOVE IMAGE WITH LUCK INPUT
    luckInput.addEventListener('keydown', function () {
      document.querySelector(`#${winImg}`).style.display = 'none';
      messageDiv.style.display = 'none';
    })
    left.textContent -= 1;
  } else {
    // YOU LOSE
    messageDiv.style.display = 'block';
    messageDiv.style.background = 'rgb(190, 68, 68)';
    message.textContent = `Not Correct. YOU LOSE! Don't worry try again.`;
    loseImg = `lose-${imgValue}`;
    document.querySelector(`#${loseImg}`).style.display = 'block';
    // REMOVE IMAGE WITH LUCK INPUT
    luckInput.addEventListener('keydown', function () {
      document.querySelector(`#${loseImg}`).style.display = 'none';
      messageDiv.style.display = 'none';
    })
    left.textContent -= 1;
  }

  // GAME OVER
  if (leftValue === 0) {

  }

  e.preventDefault();
});

// SETMESSAGE FUNCTION
function setMessage(meg, color, faicon) {
  message.textContent = meg;
  messageDiv.style.display = 'block';
  messageDiv.style.background = color;
  messageDiv.style.borderRadius = '15px';
  // Time Out
  setTimeout(function () {
    messageDiv.style.display = 'none';
  }, 2200)
}