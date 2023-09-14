/*Here I have initialized the following 3 variables outside the diceRoll function because there is no need
of initializing these variables with each function call. Instead of repeatedly selecting the same DOM elements 
inside the diceRoll function, we can select them once outside the function and reuse the references. 
This can improve performance by reducing the number of DOM queries.
*/
let verdictElement = document.getElementById("verdict");
let imageElement = document.querySelectorAll("img");
let refreshBtn = document.getElementById("btn");

function randomNumberGenerator() {
    return Math.floor(Math.random() * 6) + 1;
}
function diceRoll() {
    refreshBtn.innerText = "Roll";
    let rNumber = randomNumberGenerator()
    let rNumber2 = randomNumberGenerator()

    // First dice
    let randomDiceImage = "dice" + rNumber + ".png";
    imageElement[0].setAttribute("src", randomDiceImage);

    // Second dice
    let randomDiceImage2 = "dice" + rNumber2 + ".png";
    imageElement[1].setAttribute("src", randomDiceImage2)

    //Winner logic
    if (rNumber > rNumber2) {
        verdictElement.innerText = "Player1 wins!";
    } else if (rNumber < rNumber2) {
        verdictElement.innerText = "Player2 wins!";
    } else {
        verdictElement.innerText = "Draw";
    }
}
