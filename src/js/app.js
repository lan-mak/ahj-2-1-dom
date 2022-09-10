class Game {
  constructor(width = 4, height = 4) {
    this.width = width;
    this.height = height;
    this.countCell = this.width * this.height;
    this.sizeCell = 250;
  }

  newGame() {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', '<div class="board"></div>');

    console.log(`привет ${this.width} и ${this.height}`);

    const cell = document.createElement('div');
    cell.style.width = '250px';
    cell.style.height = '250px';
    cell.innerText = 'test';
    console.log(cell);
  }
}

window.widget = new Game();
