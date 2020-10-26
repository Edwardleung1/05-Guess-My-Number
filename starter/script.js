'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
  const guess = parseInt(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
  }
});