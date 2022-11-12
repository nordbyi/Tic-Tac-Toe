class Game {
  constructor(player1, player2) {
    // this.player1 = player1
    // this.player2 = player2
    this.player1 = new Player('Turtle', 0, 'X')
    this.player2 = new Player('Dolphin', 1, 'O')
    this.startingPlayer = this.player1
    this.currPlayer = this.player1
    this.gameState = 'ongoing'
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
    if (this.updateBoard(index)) {
      if (this.checkForWin()) {
        this.currPlayer.increaseWins()
        // win logic
        //put this.reset(in setTimeout())
        this.reset()
        return
      } else if (this.checkForTie()) {
        // tie logic
        //put this.reset(in setTimeout())
        this.reset()
        return
      }
      this.changePlayer('currPlayer')
    }
    console.log(this.board)

  }

  updateBoard(index) {
    if (this.board[index].token === null) {
      this.board[index].token = this.currPlayer.token
      return true
    }
  }

  changePlayer(propertyStr) {
    if (this[propertyStr] === this.player1) {
      this[propertyStr] = this.player2
    } else this[propertyStr] = this.player1
  }

  // changeTurn() {
  //   this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1
  // }

  checkForWin() {
    var currPlayerIndices = this.board.filter(el => el.token === this.currPlayer.token).map(el => el.index)
    // console.log(currPlayerIndices)
    for (var i = 0; i < this.winningIndices.length; i++) {
      if (this.winningIndices[i].every(el => currPlayerIndices.includes(el))) {
        console.log(`${this.currPlayer.name} Wins!`)
        return true
      }
    }
  }

  checkForTie() {
    if (this.board.every(el => el.token !== null)) {
      console.log('It\'s a tie!')
      return true
    }
  }

  reset() {
    this.board = [
    {index: 0, token: null}, {index: 1, token: null}, {index: 2, token: null},
    {index: 3, token: null}, {index: 4, token: null}, {index: 5, token: null},
    {index: 6, token: null}, {index: 7, token: null}, {index: 8, token: null}
    ]
    this.changePlayer('startingPlayer')
    console.log('starting player: ', this.startingPlayer)
    
    this.currPlayer = this.startingPlayer
    console.log('current player: ', this.currPlayer)

    this.gameState = 'ongoing'
    // this.changeTurn()
    // update DOM in main.js
  }
}