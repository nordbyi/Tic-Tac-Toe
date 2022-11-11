class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.currPlayer = this.player1
    this.board = 
    [{index: 0, token: null}, {index: 1, token: null}, {index: 2, token: null},
     {index: 3, token: null}, {index: 4, token: null}, {index: 5, token: null},
     {index: 6, token: null}, {index: 7, token: null}, {index: 8, token: null}]

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

  }

  changeTurn() {
    this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1
  }

  checkForWin() {
    currPlayerIndices = this.board.filter(el => el.token === this.currPlayer.token).map(el => el.index)
    for (i = 0; i < this.winningIndices.length; i++) {
      if(this.winningIndices[i].every(el => currPlayerIndices.includes(el))) {
        // game win
      }
    }
  }

  checkForTie() {
    if(this.board.every(el => el.token !== null)) {
      return true
    }
  }

  reset() {
    this.board = 
    [0, 1, 2,
     3, 4, 5,
     6, 7, 8]
    
    // this.changeTurn()
    // update DOM in main.js
  }
}