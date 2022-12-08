# JavaScript Pig Game

### Process
JavaScript, HTML, CSS. Names are editable. The game is not really optimized for a small screen. Inspired by Jonas Schmedtmann, copyright by Jonas Schmedtmann, implementation is mine.

### Consideration
Since we know that the game begins with the player `player--0`, a smarter way to switch currect player is:
```
  let activePlayer = 0;
```
If dice is not qual to 1:
```
  document.getElementById(`current--${activePlayer}`).textContent
```
If dice is equal to 1:
```
  activePlayer = activePlayer === 0 ? 1 : 0; 
```
Instead of using `.classList.add('player--active')` or `.classList.remove('player--active')`:
```
  'player1'.classList.toggle('player--active');
  'player2'.classList.toggle('player--active');
```

### Rules
Winner is the one who gets 100 point first. If the dice is ONE then you loose you current points. You can click HOLD to add your current points to your total, but you loose your turn.

### See live page
[play the game](https://learnfl.github.io/proj-web-pig-game/)

### Screenshots
![Screen Shot 2022-10-29 at 4 02 34 PM](https://user-images.githubusercontent.com/86169204/198850543-961c12d1-94ea-4d12-9d84-1f04d7261ba2.png)
![Screen Shot 2022-10-29 at 4 03 10 PM](https://user-images.githubusercontent.com/86169204/198850563-4e59aa10-8d47-40be-9b9f-a3020e48a547.png)
![Screen Shot 2022-10-29 at 4 49 17 PM](https://user-images.githubusercontent.com/86169204/198851822-89867cd1-66b6-4fea-b584-c153e4f34efd.png)
