const computerPlay = () => {
  const choices = ["Rock", "Paper", "Scissors"]
  const randomChoices = Math.floor(Math.random() * 3)
  const computerChoice = choices[randomChoices]
  return computerChoice
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a tie!"
  } else if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === "Paper") {
    return "You lose. Paper beats rock."
  } else if (playerSelection.toLowerCase() === "Paper" && computerSelection.toLowerCase() === "Scissors") {
    return "You lose. Scissors cuts paper."
  } else if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Rock") {
    return "You lose. Rock beats scissors."
  } else if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === "Scissors") {
    return "You win! Rock beats scissors!"
  } else if (playerSelection.toLowerCase() === "Paper" && computerSelection.toLowerCase() === "Rock") {
    return "You win! Paper beats rock!"
  } else if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Paper") {
    return "You win! Scissors beats paper!"
  } 
}