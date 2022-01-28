const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function() {
    // promt user to make guess, save input as guess
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `)
    // if guess is a number between smallestNum and Biggest Num
    if(Number.isInteger(parseInt(guess)) && guess >= this.smallestNum && guess <= this.biggestNum){
      // add guess to prevGuesses
      this.prevGuesses.push(guess)
    } else if(guess === 'quit') {
      console.log('asdf')
    } else {
      // if it fails the if, try again
      this.getGuess()
    }
  },
  play: function() {
    //create random number
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)

    do {
      this.getGuess()
      console.log(`user input was ${this.prevGuesses[this.prevGuesses.length - 1]}`) // logs most recent guess
    } while(parseInt(this.prevGuesses[this.prevGuesses.length - 1]) !== parseInt(this.secretNum)) //exits loop when user correctly guesses secretNum

    console.log("You got it!")

  }
}

game.play()