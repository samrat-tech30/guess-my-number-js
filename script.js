'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!!!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 17;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number!!!';
    displayMessage('no number!!!');
  }

  //when players winss
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct Number!!!';
    displayMessage('Correct Number!!!')
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //highscore logic
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? 'too high' : 'too low';
        displayMessage(guess > secretNumber ? 'too high' : 'too low');
        score--;
        document.querySelector('.score').textContent = score;
        } else {
        // document.querySelector('.message').textContent = 'You lost the game!';
        displayMessage('You lost the game!')
        document.querySelector('.score').textContent = 0;
    }
  }
})
  // number is high
//   else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'too high!';
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   // number is low
//   else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = 'too low';
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//})

//again button logic
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})