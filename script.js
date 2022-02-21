let count = 0
let playerwins = 0
let computerwins = 0
let player_prompt = ''

let computer_choice= function() {
    let choice = (Math.floor(Math.random()*3))
    if (choice < 1) {
        return 'rock'
    } else if (choice > 1 & choice < 2) {
        return 'scissor'
    } else {
        return 'paper'
    }
}


let player_choice = function() {
    player_prompt = prompt("Pick rock, paper or scissor.")
    ///check if answer
    if (player_prompt == null) {
        alert("try again!")
        player_choice()
    }
    let p_choice = player_prompt.toLowerCase()
    if (p_choice === "rock" || p_choice === "scissor" || p_choice === "paper") {
        return p_choice
    } else {
        alert("Try again!")
        player_choice()
    }
}



/// keeps track of score 
let playRound = function(x) {
    if (x) {
        playerwins += 1
    } else {
        computerwins += 1
    }
    console.log((`The score is ${playerwins} to ${computerwins}`))
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

let gameWinner = function(playerscore, computerscore) {
    if (playerscore > computerwins) {
        alert("You win!")
    } else if (computerwins > playerscore) {
            alert("You lose!")
    } else {
        alert("Its a tie! Try again!")
    }
}


for (i = 0; i <= 5; i++) {
    let c_choice = computer_choice()
    let p_choice = player_choice()
    game(p_choice,c_choice)
    player_prompt = ''
}


gameWinner(playerwins, computerwins)