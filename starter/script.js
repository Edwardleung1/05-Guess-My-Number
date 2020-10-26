'use strict';

document.querySelector('.check').addEventListener('click', function() {
  const guess = parseInt(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = ' No number!';
  }
});