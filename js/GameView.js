export default class GameView {
    update(game) {
      this.updateTurn(game);
      this.updateBoard(game);
    }
  
    updateTurn(game) {        
        let playerX= document.querySelector('.player-x');
        let playerO = document.querySelector('.player-o');
        playerX.classList.remove("active");
        playerO.classList.remove("active");
                    
        if (game.turn == 'X') {
            playerX.classList.add('active');
        } else {
            playerO.classList.add('active');
        }
    }
  
    updateBoard(game) {
      const winningCombination = game.findWinningCombination();
  
      for (let i = 0; i < game.board.length; i++) {
        const tile = document.querySelector(`.board__tile[data-index="${i}"]`);
  
        tile.classList.remove("board__tile--winner");
        
        let classType = game.board[i] == "X" ? "tile-x" : "tile-o";
        tile.innerHTML = `<span class="${classType}">${game.board[i] ? game.board[i] : ""}</span>`;
  
        if (winningCombination && winningCombination.includes(i)) {
            
          tile.classList.add("board__tile--winner");
        }
      }
    }
  }
  