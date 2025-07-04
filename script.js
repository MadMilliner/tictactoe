var gameboard = {
  One: "",
  Two: "",
  Three: "",
  Four: "",
  Five: "",
  Six: "",
  Seven: "",
  Eight: "",
  Nine: "",
}

var players = {
    player1: {name: window.prompt("player1","player1").valueOf, marker: "X", win: () => alert(`${players.player1.name} Wins!`)},
    player2: {name: window.prompt("player2","player2").valueOf, marker: "O", win: () => alert(`${players.player2.name} Wins!`)},
}

var game = {
    accessDom: function() {
        this.header = document.getElementById("header");
        this.display = document.getElementById("display");
        this.board = document.getElementById("gameboard");
        this.status = document.getElementById("status");
        this.resetButton = document.getElementById("resetButton")
    },

    init: for (let square in gameboard) {
        var gamesquare = document.createElement("div");
        gamesquare.setAttribute("id", square);
        board.appendchild(gamesquare);     
    },

    buttons: function() {
        resetButton.onclick = game.init()
    },

    playGame: function() {
        
    },

    winner: function() {
        if (gameboard.One & gameboard.Two & gameboard.Three === players.player1.marker) {players.player1.win
        } else if (gameboard.One & gameboard.Five & gameboard.Nine === players.player1.marker) {players.player1.win
        } else if (gameboard.One & gameboard.Four & gameboard.Seven === players.player1.marker) {players.player1.win
        } else if (gameboard.Two & gameboard.Five & gameboard.Eight === players.player1.marker) {players.player1.win
        } else if (gameboard.Three & gameboard.Six & gameboard.Nine === players.player1.marker) {players.player1.win
        } else if (gameboard.Three & gameboard.Five & gameboard.Seven === players.player1.marker) {players.player1.win
        } else if (gameboard.Four & gameboard.Five & gameboard.Six === players.player1.marker) {players.player1.win
        } else if (gameboard.Seven & gameboard.Eight & gameboard.Nine === players.player1.marker) {players.player1.win
        } else if (gameboard.One & gameboard.Two & gameboard.Three === players.player2.marker) {players.player2.win
        } else if (gameboard.One & gameboard.Five & gameboard.Nine === players.player2.marker) {players.player2.win
        } else if (gameboard.One & gameboard.Four & gameboard.Seven === players.player2.marker) {players.player2.win
        } else if (gameboard.Two & gameboard.Five & gameboard.Eight === players.player2.marker) {players.player2.win
        } else if (gameboard.Three & gameboard.Six & gameboard.Nine === players.player2.marker) {players.player2.win
        } else if (gameboard.Three & gameboard.Five & gameboard.Seven === players.player2.marker) {players.player2.win
        } else if (gameboard.Four & gameboard.Five & gameboard.Six === players.player2.marker) {players.player2.win
        } else if (gameboard.Seven & gameboard.Eight & gameboard.Nine === players.player2.marker) {players.player2.win
        } else if (gameboard.One & gameboard.Two & gameboard.Three & gameboard.Four & gameboard.Five & gameboard.Six & gameboard.Seven & gameboard.Eight & gameboard.Nine != "") {
            alert("It's a draw. Game Over")};
    },
}