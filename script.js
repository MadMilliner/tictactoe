// players object

var players = {
  player1: {
    name: window.prompt("Enter Player 1 name:", "X"), 
    marker: "X", 
    win: function() { gameboard.statusDiv.innerText = `${this.name} Wins!`; }
  },
  player2: {
    name: window.prompt("Enter Player 2 name:", "O"), 
    marker: "O", 
    win: function() { gameboard.statusDiv.innerText = `${this.name} Wins!`; }
  }
};

// game setup
let gameState = ["","","","","","","","",""];
let currentPlayer = players.player1;

var gameboard = {
    accessDom: function() {
        this.header = document.getElementById("header");
        this.display = document.getElementById("display");
        this.board = document.getElementById("gameboard");
        this.statusDiv = document.getElementById("status");
        this.resetButton = document.getElementById("resetButton");
        this.gameboardsquare = document.querySelectorAll(".cell");
    },

    init: function() {
        this.gameboardsquare.forEach(cell => cell.addEventListener("click", this.cellClick));
        this.resetButton.addEventListener("click", this.restartGame);
        this.statusDiv.innerText = `${players.player1.name}'s turn`;
    },

    wincons: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],

    winCheck: function() {
        let roundWon = false;
        for(let i = 0; i < this.wincons.length; i++) {
            const condition = this.wincons[i];
            const cellA = gameState[condition[0]];
            const cellB = gameState[condition[1]];
            const cellC = gameState[condition[2]];
            
            if (cellA === "" || cellB === "" || cellC === "") {
                continue;
            }
            if (cellA === cellB && cellB === cellC) {
                roundWon = true;
                break;
            }

        }
        if(roundWon){
            currentPlayer.win();
        }
        else if(!gameState.includes("")){
            gameboard.statusDiv.innerText = `Draw. Play again?`            
        }
        else {currentPlayer = currentPlayer === players.player1 ? players.player2 : players.player1;
                gameboard.statusDiv.innerText = `${currentPlayer.name}'s turn`;}
    },

    cellClick: function(event) {
        const cellIndex = this.getAttribute("cellIndex");
        if (gameState[cellIndex] === "") {
            gameState[cellIndex] = currentPlayer.marker;
            gameboard.gameboardsquare[cellIndex].classList.add(currentPlayer === players.player1 ? 'player1-marker' : 'player2-marker');
            gameboard.gameboardsquare[cellIndex].textContent = currentPlayer.marker;
            gameboard.winCheck();
    }
        
},

    restartGame: function() {
        gameState = ["","","","","","","","",""];
        gameboard.gameboardsquare.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove('player1-marker', 'player2-marker');
        currentPlayer = players.player1;
        gameboard.statusDiv.innerText = `${currentPlayer.name}'s turn`;
    }); 
    },    

    start: function() {
        gameboard.accessDom();
        gameboard.init();
    },
};
gameboard.start();

