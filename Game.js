class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.board = 
    [0, 1, 2,
     3, 4, 5,
     6, 7, 8]
     
    this.winningIndices = 
    [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
    ]

    this.turn = true
  }

  changeTurn() {
    this.turn = !this.turn
  }

  checkForWin() {}

  checkForTie() {}

  reset() {}
}