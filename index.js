const numOfDiceEl = document.getElementById("num-of-dice");
const diceResult = document.getElementById("dice-result");
const diceImages = document.getElementById("dice-images");

function rollDice() {

    const numOfDice = Number(numOfDiceEl.value);
    const values = [];
    const images = [];

    for(let i=0; i<numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice-images/${value}.png" alt = "Dice ${value}">`)
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");

}