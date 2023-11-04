let totalAttems = 5;
let attems = 0;
let totalWons = 0;
let totalLosts = 0;

//finding or selective elements start

let form = document.querySelector(".form");
let card_body = document.querySelector(".cardBody");
let guessingNumber = document.querySelector(".guessingNumber");
let button = document.querySelector(".button");
let resultText = document.querySelector(".resultText");
let remainingText = document.querySelector(".remainingText");


let message = document.createElement("p")
 

//finding or selective elements end



form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkResult(guessingNumber.value);
    attems++;
    if(attems > 5){
        guessingNumber.disabled = true;
        button.disabled = true;

    }else{
        checkResult(guessingNumber.value);
        remainingText.innerHTML = `Remaining attemps: ${totalAttems - attems}`
        remainingText.innerHTML(remainingText)

    }
    guessingNumber.value = " ";

})

function checkResult(value){
    let randomNumber = getRandomNumber(5);
    if(randomNumber == value){
        resultText.innerHTML = `You have won!`
        totalAttems++;

    }else{
        resultText.innerHTML = `You have lost and random number was : ${randomNumber}`
        totalLosts++
    }

    message.innerHTML = `Total Won: ${totalWons} And Total Lost: ${totalLosts}`
    message.classList.add("text");
    resultText.appendChild(message)




}
function getRandomNumber(limit){
    return Math.floor(Math.random() * limit + 1);
}





