const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    //create random number
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    let guess
    // get into guess loop
    do {
      guess = this.getGuess() 
      this.prevGuesses.push(guess) // add guess to prevGuesses
      this.render(guess, this.secretNum);
      console.log(`user input was ${guess}`) // logs most recent guess
    } while(parseInt(guess) !== parseInt(this.secretNum)) //exits loop when user correctly guesses secretNum
    
    console.log("You got it!")
  },
  getGuess: function() {
    // promt user to make guess, save input as guess
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `)
    // if guess is a number between smallestNum and Biggest Num
    if(Number.isInteger(parseInt(guess)) && guess >= this.smallestNum && guess <= this.biggestNum){
      // add guess to prevGuesses
      return guess
    } else if(guess === 'quit') {
      console.log('asdf')
    } else {
      // if it fails the if, try again
      this.getGuess()
    }
  },
  render: function(usr, rnd) {
    if(parseInt(usr) === parseInt(rnd)) {
      window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} tries!`)
    } else if(parseInt(usr) > rnd) {
      window.alert(`Your guess is too High
      previous guesses: ${this.prevGuesses.toString()}`)
    } else {
      window.alert(`Your guess is too Low
      previous guesses: ${this.prevGuesses.toString()}`)
    }
  }
}

game.play()