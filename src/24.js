document.body.addEventListener('click',() => {
    for (let i = 0; i <50; i++){
    createRaindrop();
}
})

function createRaindrop(){
    const drop = document.createElement('div')
    drop.classList.add('raindrop')

    drop.style.left = `${Math.random() * 100}%`;

    const randomDuration = Math.random() + 0.5;
    drop.style.animationDuration = `${randomDuration}s`;

    container.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, randomDuration * 1000);
}