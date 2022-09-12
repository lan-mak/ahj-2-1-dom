import imgGoblin from '../img/pic/goblin.png';

class Game {
  constructor(size = 4) {
    this.size = size;
    this.countCell = size ** 2;
    this.sizeCell = 200;
    this.goblinPosition = null;
    this.arrCell = null;
  }

  generateGameBoard() {
    const body = document.querySelector('body');
    const board = document.createElement('div');
    board.classList.add('table');
    board.style.width = `${this.size * this.sizeCell}px`;
    board.style.height = `${this.size * this.sizeCell}px`;
    body.insertAdjacentElement('afterbegin', board);

    for (let i = 0; i < this.countCell; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${this.sizeCell}px`;
      cell.style.height = `${this.sizeCell}px`;
      board.append(cell);
    }

    this.arrCell = document.querySelectorAll('.cell');
  }

  goblinImg() {
    const goblin = document.createElement('img');
    goblin.src = imgGoblin;
    return goblin;
  }

  randomPosition() {
    const position = Math.floor(Math.random() * this.countCell);
    if (this.goblinPosition === position) {
      this.randomPosition();
    } else {
      this.goblinPosition = position;
      this.arrCell[position].classList.add('goblin');
      this.arrCell[position].append(this.goblinImg());
    }
  }

  randomCellGoblin() {
    setInterval(() => {
      document.querySelector('img').remove();
      this.randomPosition();
    }, 1000);
  }

  newGame() {
    this.generateGameBoard();
    this.randomPosition();
    this.randomCellGoblin();
  }
}

window.widget = new Game();
