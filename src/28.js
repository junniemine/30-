let currentSize = 10
container.onclick = () => {
    currentSize += 1;

    container.style.fontSize = `${currentSize}px`
}