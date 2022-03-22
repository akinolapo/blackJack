let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEL = document.querySelector("#cards-el")

let player = {
    name: "Peace",
    chips: 145
}

let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

// console.log(cards)

function getRandomCard(){
    let randomNumnber = Math.floor(Math.random() * 13) + 1
    if (randomNumnber > 10){
        return 10
    } else if(randomNumnber === 1){
        return 11
    } else{
        return randomNumnber
    }
}

function startGame(){
    // player.chips -= 5
    // playerEl.textContent = player.name + ": $" + player.chips
    // console.log(player.chips)
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEL.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEL.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        // player.chips += 10
        console.log(player.chips)
        
    } else{
        message = "You are out of the game!"
        isAlive = false
    }
    // console.log(message)
    // playerEl.textContent = player.name + ": $" + player.chips
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack ===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
   
}





// console.log(hasBlackJack);
// console.log(isAlive);

