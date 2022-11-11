class Player {
  constructor({name, id, token}) {
    this.name = name
    this.id = id
    this.token = token
    this.wins = 0
  }

  increaseWins() {
    this.wins++
  }
}