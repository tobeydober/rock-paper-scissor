let count = 0
let playerwins = 0
let computerwins = 0
let player_prompt = ''
let p_choice = ''
let c_choice = ''


let computer_choice = function() {
    let choice = (Math.floor(Math.random()*3))
    if (choice < 1) {
        return 'rock'
    } else if (choice > 1 & choice < 2) {
        return 'scissor'
    } else {
        return 'paper'
    }
}


/// keeps track of score 
let playRound = (x) => {
    if (x) {
        playerwins += 1
    } else {
        computerwins += 1
    }
}


let game = function(player, computer) {
    if (player === "paper" & computer === "rock") {
        alert("Player wins")
        playRound(true)
        return
    } else if (player === "paper" & computer === "scissor") {
        alert("Computer wins")
        playRound(false)
        return
    } else if (player === "scissor" & computer === "rock") {
        alert("Player wins")
        playRound(true)
        return
    } else if (player === "scissor" & computer === "paper") {
        alert("Computer wins")
        playRound(false)
        return
    } else if (player ==="rock" & computer === "scissor") {
        alert("Player wins")
        playRound(true)
        return
    } else if (player === "rock" & computer === "paper") {
        alert("Computer wins")
        playRound(false)
        return
    } else {
        alert("Its a tie!")
        return
    }
}


//alerts who wins the round
let gameWinner = function(playerscore, computerscore) {
    if (playerscore > computerscore) {
        alert("You win the round!")
    } else if (computerscore > playerscore) {
            alert("You lose the round!")
    } else {
        alert("Its a tie! Try again!")
    }
}

//checks if someone won up to 5 and resets score
let endGame = function(playerScore, computerScore) {
    if (playerScore === 5) {
        alert('You win the game!')
        playerwins = 0
        computerwins = 0
        score.textContent = (`The score is Player: ${playerwins} Computer: ${computerwins}`)
    }
    if (computerScore === 5) {
        alert('You lose the game!')
        playerwins = 0
        computerwins = 0
        score.textContent = (`The score is Player: ${playerwins} Computer: ${computerwins}`)
    }
    return
}


// making event listeners for player's choices


//appends a div to scoreboard and changes the score
let newScore = function() {
    scoreboard.appendChild(score)
    score.textContent = (`The score is Player: ${playerwins} Computer: ${computerwins}`)
} 

const paperClick = document.querySelector(".paperButton")
const scissorClick = document.querySelector('.scissorButton')
const rockClick = document.querySelector('.rockButton')
const scoreboard = document.querySelector('.scoreboard')
const score = document.createElement('div')
const initialScore = document.querySelector('.initialScore')


//these choices add an event listerner to buttons, picks a player
//and computer choice, plays a game and change score
paperClick.addEventListener('click', () => {
    p_choice = 'paper'
    c_choice = computer_choice()
    game(p_choice, c_choice)
    initialScore.remove()
    newScore()
    endGame(playerwins, computerwins)
})

scissorClick.addEventListener('click', () => {
    p_choice ='scissor'
    c_choice = computer_choice()
    game(p_choice, c_choice)
    initialScore.remove()
    newScore()
    endGame(playerwins, computerwins)
})

rockClick.addEventListener('click', () => {
    p_choice = 'rock'
    c_choice = computer_choice()
    game(p_choice, c_choice)
    initialScore.remove()
    newScore()
    endGame(playerwins, computerwins)
})