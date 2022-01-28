console.log("GUESS THE NUMBER")

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function() {
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `)
    if(Number.isInteger(parseInt(guess)) && guess >= this.smallestNum && guess <= this.biggestNum){
      this.prevGuesses.push(guess)
    } else {
      this.getGuess()
    }
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    //console.log(this.secretNum)
    //let userIn = prompt("Guess a Nmber please")
    this.getGuess()
    console.log(`user input was ${this.prevGuesses[0]}`)
  }
}

game.play()