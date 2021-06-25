import Game from "./Game.js";
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {    
      onRestartClick();
});

document.querySelectorAll(".board__tile").forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    });
});

function onTileClick(i) {
    game.makeMove(i)
    gameView.update(game);
}

function onRestartClick() {
    game = new Game();
    gameView.update(game)
}

gameView.update(game)
