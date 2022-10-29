'use strict';

const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');
const diceImage = document.querySelector('.dice');
const players = document.querySelectorAll('.player');
const overLay = document.querySelector('.overlay');

let winner = false;
let game = false;

function findActivePlayer() {
  return document.querySelector('.player--active');
}

rollButton.addEventListener('click', () => {
  if (game === false) game = true;
  if (!winner) {
    diceImage.classList.remove('hidden');

    //   Roll a dice
    const roll = Math.trunc(Math.random() * 6) + 1;

    // Show dice
    diceImage.setAttribute('src', `dice-${roll}.png`);

    //   If got 1 then loose scores and move to next player
    if (Number(roll) === 1) {
      players.forEach(player => {
        if (player.classList.contains('player--active')) {
          player.classList.remove('player--active');
          player.querySelector('.current-score').textContent = 0;
        } else {
          player.classList.add('player--active');
        }
      });
    } else {
      let activePlayer = findActivePlayer();
      let currentScore =
        activePlayer.querySelector('.current-score').textContent;
      activePlayer.querySelector('.current-score').textContent =
        Number(currentScore) + Number(roll);
    }
  }
});

holdButton.addEventListener('click', () => {
  // Hold allowe3d only if game started
  if (game) {
    let activePlayer = findActivePlayer();
    let score = Number(activePlayer.querySelector('.score').textContent);

    // Hold is allowed only if player rolled dice
    if (
      Number(activePlayer.querySelector('.current-score').textContent) !== 0
    ) {
      activePlayer.querySelector('.score').textContent =
        score +
        Number(activePlayer.querySelector('.current-score').textContent);
      activePlayer.querySelector('.current-score').textContent = 0;

      // Check if player is the winner
      if (Number(activePlayer.querySelector('.score').textContent) >= 100) {
        diceImage.classList.add('hidden');
        activePlayer.style.backgroundColor = '#3c4048a4';
        winner = true;
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
  }
});

// New game
newGameButton.addEventListener('click', () => {
  location.reload();
});
