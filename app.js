const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  /// PLAY
  play: function() {

    // Set new Range
    this.resize()

    // create random number
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    let guess
    // get into guess loop
    do {
      guess = this.getGuess() // invoke getGuess() return result to guess
    } while(this.render(guess) === false)

    return
  },


  /// GET GUESS
  getGuess: function() {
    // promt user to make guess between smallestNum and biggestNum, save input as guess
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `)
    guess = parseInt(guess)
    // if guess is a NUMBER between smallestNum and Biggest Num
    if(Number.isInteger(guess) && guess >= this.smallestNum && guess <= this.biggestNum){
      this.prevGuesses.push(parseInt(guess)) // add guess to prevGuesses
    } else if(guess === 'quit') {
      return 
    } else {
      guess = 'Invalid Guess'
    }
    return guess
  },

  /// RENDER
  render: function(usr) {
    let solve = false

    //If usr input = random number AND there has been more than one guess
    if(parseInt(usr) === this.secretNum && this.prevGuesses.length > 1) { // congrats message
      window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} tries!`)
      solve = true
    } else if(parseInt(usr) === this.secretNum) { // Check if user solved in 1 try and give super secret special message
      window.alert(`Congrats! You guessed the number in ${this.prevGuesses.length} try...You're not cheating are you?`)
      solve = true
    } else if(parseInt(usr) > this.secretNum && Number.isInteger(parseInt(usr))) { //guess too high, triple check that usr is a number
      window.alert(`Your guess is too High
      previous guesses: ${this.prevGuesses.toString()}`) 

      this.biggestNum = usr // set biggestNum to user guess
      solve = false
    } else if(parseInt(usr) < this.secretNum && Number.isInteger(parseInt(usr))){ // guess too low, triple check usr is actually a number
      window.alert(`Your guess is too Low
      previous guesses: ${this.prevGuesses.toString()}`)

      this.smallestNum = usr // set smallestNum to user guess
      solve = false
    } else if(usr === 'Invalid Guess') {
      window.alert(`Nice try bozo`)
      solve = false
    } else {
      window.alert('Something has gone terribly wrong...')
      return
    }
    return solve
  },


  /// RESIZE
  resize: function(){
    let newRange
    let small
    let big
    newRange = window.prompt('Enter your desired range, please use two numbers seperated by a space.')

    // spilt user input into array, convert from strings into numbers
    newRange = newRange.split(' ')
    small = newRange[0]
    big = newRange[1]
    small = parseInt(small)
    big = parseInt(big)

    // IF user didn't enter 2 thing or either of them isn't a number
    if(newRange.length !== 2 || !Number.isInteger(big) || !Number.isInteger(small)) {
      window.alert(`You're doing something wrong...`)
      this.resize()
    } else if(small >= big) { //is the second number was bigger than the first, swap them 
      this.smallestNum = big
      this.biggestNum = small
    }
    else {
      this.smallestNum = small
      this.biggestNum= big
    }
  }
}

game.play()