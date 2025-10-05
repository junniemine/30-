const diceDot = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

diceface.onclick = () => {
    const randomIndex = Math.floor(Math.random()*6);

    const randomDot = diceDot[randomIndex];

    diceface.innerText = randomDot
}