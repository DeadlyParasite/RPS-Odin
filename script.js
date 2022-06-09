let playerScore = 0
let computerScore = 0

const computerPlay = () => {
  const choices = ["Rock", "Paper", "Scissors"]
  const randomChoices = Math.floor(Math.random() * 3)
  const computerChoice = choices[randomChoices]
  return computerChoice
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "You tied! You both picked rock"
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "You tied! You both picked paper"
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    return "You tied! You both picked scissors"
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++
    return "You lose. Paper beats rock."
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++
    return "You lose. Scissors cuts paper."
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++
    return "You lose. Rock beats scissors."
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++
    return "You win! Rock beats scissors!"
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++
    return "You win! Paper beats rock!"
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++
    return "You win! Scissors beats paper!"
  } 
}

const playerSelection = "Rock"

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose either Rock, paper or scissors").toLowerCase()
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
  }

  if (playerScore > computerScore) {
    return "You won rock paper scissors! Congratulations!"
  } else if (computerScore > playerScore) {
    return "You lost! Practice more!"
  } else {
    return "You tied with the computer!"
  }
}

console.log(game())