const audio = document.getElementById('sound')
const drum = document.getElementById('drum')


drum.onclick = () => {
    if (!audio) return;
    
    audio.currentTime = 0
    audio.play()

    drum.classList.add('playing')
    setTimeout(() => {
        drum.classList.remove('playing');
    }, 100);
}