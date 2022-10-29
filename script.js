'use strict';

const rollBotton = document.querySelector('.btn--roll');
const holdBotton = document.querySelector('.btn--hold');
const newGameBotton = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const players = document.querySelectorAll('.player');
const overLay = document.querySelector('.overlay');

let game = false;

window.onload = () => (game = true);

function findActivePlayer() {
  return document.querySelector('.player--active');
}

rollBotton.addEventListener('click', () => {
  if (game) {
    diceImage.classList.remove('hidden');

    //   Roll a dice
    const roll = Math.trunc(Math.random() * 6) + 1;

    //   If got 1 then loose scores and move to next player
    if (Number(roll) === 1) {
      diceImage.setAttribute('src', `dice-${roll}.png`);
      players.forEach(player => {
        if (player.classList.contains('player--active')) {
          player.classList.remove('player--active');
          player.querySelector('.current-score').textContent = 0;
        } else {
          player.classList.add('player--active');
        }
      });
    } else {
      diceImage.setAttribute('src', `dice-${roll}.png`);
      let activePlayer = findActivePlayer();
      let currentScore =
        activePlayer.querySelector('.current-score').textContent;
      activePlayer.querySelector('.current-score').textContent =
        Number(currentScore) + Number(roll);
    }
  }
});

holdBotton.addEventListener('click', () => {
  if (game) {
    let activePlayer = findActivePlayer();
    let score = Number(activePlayer.querySelector('.score').textContent);
    activePlayer.querySelector('.score').textContent =
      score + Number(activePlayer.querySelector('.current-score').textContent);
    activePlayer.querySelector('.current-score').textContent = 0;
    if (Number(activePlayer.querySelector('.score').textContent) >= 100) {
      diceImage.classList.add('hidden');
      activePlayer.style.backgroundColor = '#3c4048a4';
      game = false;
    } else {
      players.forEach(player => {
        if (player.classList.contains('player--active')) {
          player.classList.remove('player--active');
        } else {
          player.classList.add('player--active');
        }
      });
    }
  }
});

newGameBotton.addEventListener('click', () => {
  location.reload();
  game = true;
});
