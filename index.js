let firstCard = document.getElementById("showfirst");
let secondCard = document.getElementById("showsecond");
let thirdCard = document.getElementById("thirdcard")
let cardsEl=document.getElementById("cards")
let cards=[]
let isAlive="true"
let fourthCard = document.getElementById("showfourth")
let buttonInnertext = document.getElementById("button");
let messageEl = document.getElementById("message");
let tryAgain = document.getElementById("tryagain")
var counter = 0;
let message = ""
let randomNumber = 0
let randomNumber2 = 0
let randomNumber3 = 0
let randomNumber4 = 0
let sta2s = ""
let sum = 0
let elNum = document.createElement("div")
elNum.innerHTML="ses"
function draw() {
  if (isAlive=="true"){
  randomNumber = Math.floor(Math.random() * 11) + 1;
  cards.push(randomNumber)
  sum += randomNumber
  cardsEl.innerText=cards
  if (sum>21){
    isAlive="false"
    message = "You lost! Try again."
    messageEl.innerText = message;
  }
  if(sum==21){
    message="You won! You are perfect."
    messageEl.innerText=message
    
    isAlive="false"
  }
  if (isAlive=="false"){
    tryAgain.style.display = "block"
  }
}
    /*
  while (sum != 21 && sum < 21) {

    sum += randomNumber
    randomNumber = Math.floor(Math.random() * 11) + 1;
    let elNum = document.createElement("div")
    elNum.innerText="ses"
    firstCard.innerText = randomNumber;
    buttonInnertext.innerText = "Wanna Draw For Second?";
    counter++
  }
  
  if (counter === 0) {
    sum+=randomNumber
    randomNumber = Math.floor(Math.random() * 11) + 1;
    firstCard.innerText = randomNumber;
    buttonInnertext.innerText = "Wanna Draw For Second?";
  }

  if (counter === 1) {
    randomNumber2 = Math.floor(Math.random() * 11) + 1;
    secondCard.innerText = randomNumber2
    sum = parseInt(randomNumber) + parseInt(randomNumber2);
    buttonInnertext.innerText = "Wanna Draw For Third?"
  }

  if (counter === 2 ) {
    randomNumber3 = Math.floor(Math.random() * 11) + 1
    thirdCard.innerText = randomNumber3
    console.log(randomNumber3)
    sum+=randomNumber3
    
  }
  if(counter===3){
    randomNumber4 = Math.floor(Math.random() * 11) + 1
    fourthCard.innerText = randomNumber4
    console.log(randomNumber3)
    sum+=randomNumber4
  }

  if(sum==21){
    message="You won! You are perfect."
    messageEl.innerText=message
    tryAgain.style.display = "block"
    counter=-2
  }
  if (sum > 21) {
    message = "You lost! Try again."
    messageEl.innerText = message;
    sta2s = "lost"
    
    tryAgain.style.display = "block"
    buttonInnertext.textContent = "Try Again!"
    counter=-2
  }
  
  counter++;*/
}

messageEl.textContent = message;
console.log(messageEl.innerText)
tryAgain.style.display = "none"

function Again() {
  window.location.reload()
}
