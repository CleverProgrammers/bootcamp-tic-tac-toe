export default class GameView {
    constructor(root){
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
                <div class="header-turn"></div>
                <div class="header-status"></div>
                <button type="button" class="header-restart">
                    Restart
                </button>
            </div>
            <div class="board">
                <div class="board-tile" data-index="0"></div>
                <div class="board-tile" data-index="1"></div>
                <div class="board-tile board-tile-winner" data-index="2"></div>
                <div class="board-tile" data-index="3"></div>
                <div class="board-tile" data-index="4"></div>
                <div class="board-tile" data-index="5"></div>
                <div class="board-tile" data-index="6"></div>
                <div class="board-tile" data-index="7"></div>
                <div class="board-tile" data-index="8"></div>
            </div>
        `

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".board-tile").forEach(tile=>{
            tile.addEventListener("click", ()=>{
                this.onTileClick(tile.dataset.index);
            })
        })

        this.root.querySelector(".header-restart").addEventListener("click", ()=>{
            this.onRestartClick();
        })
    }


    update(game){
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }

    updateTurn(game){
        this.root.querySelector(".header-turn").textContent = `${game.turn}'s turn`
    }

    updateStatus(game){
        let status = "In Progress";
        if(game.findWinningCombination()){
            status = `${game.turn} is the winner`;
        } else if (!game.isInProgress()){
            status = "It's a tie";
        }

        this.root.querySelector(".header-status").textContent = status;
    }

    updateBoard(game){
        const winningCombination = game.findWinningCombination();

        for(let i = 0; i < game.board.length; i++){
            const tile = this.root.querySelector(`.board-tile[data-index="${i}"]`)
            tile.classList.remove("board-tile-winner");
            tile.textContent =  game.board[i];
            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("board-tile-winner");
            }
        }
    }
}