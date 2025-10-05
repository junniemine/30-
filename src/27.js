const spotlight = document.getElementById('spotlight')
let isSpotlightActive = true;
function spotlighton (){
    const x = event.clientX
    const y = event.clientY

    spotlight.style.left = `${x}px`
    spotlight.style.top = `${y}px`
}
document.addEventListener('mousemove',spotlighton)


document.addEventListener('click',() => {
    isSpotlightActive = !isSpotlightActive;
    if (isSpotlightActive){
        document.addEventListener('mousemove',spotlighton)
     } else {
        document.removeEventListener('mousemove',spotlighton)
     }
})