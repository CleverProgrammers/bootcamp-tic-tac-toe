export default class GameView {
    update(game) {
      this.updateTurn(game);
      this.updateStatus(game);
      this.updateBoard(game);
    }
  
    updateTurn(game) {        
      document.querySelector(
        ".header__turn"
      ).textContent = `${game.turn}'s turn`;
    }
  
    updateStatus(game) {
      let status = "In Progress";
      if (game.findWinningCombination()) {
        status = `${game.turn} is the Winner!`;
      } else if (!game.isInProgress()) {
        status = "It's a tie!";
      }
  
      document.querySelector(".header__status").textContent = status;
    }
  
    updateBoard(game) {
      const winningCombination = game.findWinningCombination();
  
      for (let i = 0; i < game.board.length; i++) {
        const tile = document.querySelector(`.board__tile[data-index="${i}"]`);
  
        tile.classList.remove("board__tile--winner");
        tile.textContent = game.board[i];
  
        if (winningCombination && winningCombination.includes(i)) {
          tile.classList.add("board__tile--winner");
        }
      }
    }
  }
  