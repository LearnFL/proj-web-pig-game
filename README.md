# JavaScript Pig Game

### Process
JavaScript, HTML, CSS

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

### See live page
[play the game]()

### Screenshots
![Screen Shot 2022-10-29 at 4 02 34 PM](https://user-images.githubusercontent.com/86169204/198850543-961c12d1-94ea-4d12-9d84-1f04d7261ba2.png)
![Screen Shot 2022-10-29 at 4 03 10 PM](https://user-images.githubusercontent.com/86169204/198850563-4e59aa10-8d47-40be-9b9f-a3020e48a547.png)
