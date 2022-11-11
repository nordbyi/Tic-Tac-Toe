class Game {
  constructor(player1, player2) {
    // this.player1 = player1
    // this.player2 = player2
    this.player1 = new Player('Turtle', 0, 'X')
    this.player2 = new Player('Dolphin', 1, 'O')
    this.currPlayer = this.player1
    this.board = [
    {index: 0, token: null}, {index: 1, token: null}, {index: 2, token: null},
    {index: 3, token: null}, {index: 4, token: null}, {index: 5, token: null},
    {index: 6, token: null}, {index: 7, token: null}, {index: 8, token: null}
    ]

    this.winningIndices = [
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

  executeTurn(index) {
    if(this.updateBoard(index)) {
      if(this.checkForWin()) {
        // win logic
        //put this.reset(in setTimeout())
        this.reset()
      }
      if(this.checkForTie()) {
        // tie logic
        //put this.reset(in setTimeout())
        this.reset
      }
      this.changeTurn()
    }
    console.log(this.board)

  }

  updateBoard(index) {
    if(this.board[index].token === null) {
      this.board[index].token = this.currPlayer.token
      return true
    }
  }

  changeTurn() {
    this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1
  }

  checkForWin() {
    var currPlayerIndices = this.board.filter(el => el.token === this.currPlayer.token).map(el => el.index)
    // console.log(currPlayerIndices)
    for (var i = 0; i < this.winningIndices.length; i++) {
      if(this.winningIndices[i].every(el => currPlayerIndices.includes(el))) {
        this.onWin()
        console.log(`${this.currPlayer.name} Wins!`)
        return true
        // game win update data model function?
        // return true to break out of checking for tie if checking for tie in same place?
      }
    }
  }

  checkForTie() {
    if(this.board.every(el => el.token !== null)) {
      return true
    }
  }

  onWin() {
    this.currPlayer.increaseWins()
  }

  reset() {
    this.board = [
    {index: 0, token: null}, {index: 1, token: null}, {index: 2, token: null},
    {index: 3, token: null}, {index: 4, token: null}, {index: 5, token: null},
    {index: 6, token: null}, {index: 7, token: null}, {index: 8, token: null}
    ]
    
    // this.changeTurn()
    // update DOM in main.js
  }
}