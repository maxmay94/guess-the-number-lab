const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  /// PLAY
  play: function() {
    //create random number
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    let guess
    // get into guess loop
    do {
      guess = this.getGuess() // invoke getGuess() return result to guess
      console.log(`user input was ${guess}`) // logs most recent guess
    } while(this.render(guess, this.secretNum) === false)
    
    console.log("You got it!")
    return
  },


  /// GET GUESS
  getGuess: function() {
    //console.log('top of getGuess')

    // promt user to make guess between smallestNum and biggestNum, save input as guess
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `)
    // if guess is a NUMBER between smallestNum and Biggest Num
    if(Number.isInteger(parseInt(guess)) && guess >= this.smallestNum && guess <= this.biggestNum){
      this.prevGuesses.push(guess) // add guess to prevGuesses
    } else if(guess === 'quit') {
      return 
    } else {
      guess = 'Invalid Guess'
    }
    return guess
  },

  /// RENDER
  render: function(usr, rnd) {
    let solve = false

    //If usr input = random number AND there has been more than one guess
    if(parseInt(usr) === parseInt(rnd) && this.prevGuesses.length > 1) { // congrats message
      window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} tries!`)

      solve = true

    } else if(parseInt(usr) === parseInt(rnd)) { // Check if user solved in 1 try and give super secret special message
      window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} try...You're not cheating are you?`)

      solve = true

    } else if(parseInt(usr) > rnd && Number.isInteger(parseInt(usr))) { //guess too high, triple check that usr is a number
      window.alert(`Your guess is too High
      previous guesses: ${this.prevGuesses.toString()}`) 

      this.biggestNum = usr // set biggestNum to user guess
      solve = false

    } else if(parseInt(usr) < rnd && Number.isInteger(parseInt(usr))){ // guess too low, triple check usr is actually a number
      window.alert(`Your guess is too Low
      previous guesses: ${this.prevGuesses.toString()}`)

      this.smallestNum = usr // set smallestNum to user guess
      solve = false

    } else if(usr === 'Invalid Guess') {
      window.alert(`Nice try bozo`)
      console.log(`usr was equal to: ${usr} & previous guesses are: ${this.prevGuesses}`)
      solve = false
    } else {
      window.alert('Something has gone terribly wrong...')
      return
    }
    return solve
  },


  /// RESIZE
  resize: function(){
    
  }
}

game.play()