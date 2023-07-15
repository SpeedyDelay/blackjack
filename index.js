let firstCard = document.getElementById("showfirst");
let secondCard = document.getElementById("showsecond");
let thirdCard = document.getElementById("thirdcard")
let cardsEl = document.getElementById("cards")
let enemyCardsEl=document.getElementById("Enemycards")
let cards = []
let enemyCards=[]
let isAlive = "true"
let buttonInnertext = document.getElementById("button");
let buttonReveal=document.getElementById("reveal")
let messageEl = document.getElementById("message");
let tryAgain = document.getElementById("tryagain")
let message = ""
let randomNumber = 0
let randomNumberenemy=0
let sum = 0
let enemySum=0
function reveal(){
  enemyCardsEl.textContent=enemyCards
  isAlive="false"
  if(sum<21 && enemySum<21){
    if(21-sum<21-enemySum){
      message="player won"
    }
    if(21-sum>21-enemySum){
      message="computer won"
    }
    else{
      message="draw"
    }
  }
  if(sum==21){
    message="player got the blackjack"
    }
  if(enemySum==21){
    message="computer got the blackjack"

  }
  if(enemySum==21&&sum==21){
    message="both got the blackjack"

  }
  if(enemySum>21&&sum<21){
    message="computer lost player won"
  }
  if(enemySum<21&&sum>21){
    message="player lost computer won"
  }
  if(enemySum>21&&sum>21){
    message="both lost draw"
  }
  if(enemySum==sum){
    message="draw"
  }
  messageEl.textContent=message
  tryAgain.style.display = "block"
}
function draw() {
  if (isAlive == "true") {
    randomNumber = Math.floor(Math.random() * 11) + 1;
    while(cards.includes(randomNumber)==true||enemyCards.includes(randomNumber)==true&&(cards.length+enemyCards.length)<10){
      randomNumber = Math.floor(Math.random() * 11) + 1;}
    cards.push(randomNumber)
    sum += randomNumber
    cardsEl.innerText = cards
    //
    if(enemySum<=20){randomNumberenemy = Math.floor(Math.random() * 11) + 1;
      while(cards.includes(randomNumberenemy)==true||enemyCards.includes(randomNumberenemy)==true&&(cards.length+enemyCards.length)<10){
        randomNumberenemy = Math.floor(Math.random() * 11) + 1;}
        enemyCards.push(randomNumberenemy)
    
      

    enemySum+=randomNumberenemy
    enemyCardsEl.textContent+=("x"+",")}
   
   
    

    }
    
  }



messageEl.textContent = message;
console.log(messageEl.innerText)
tryAgain.style.display = "none"

function Again() {
  window.location.reload()
}
