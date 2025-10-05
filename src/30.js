const 바 = document.getElementById('바')
const 버튼 = document.getElementById('button')

버튼.addEventListener('mousedown', () => {
    바.classList.add('filled')
})

버튼.addEventListener('mouseup', () => {
    바.classList.remove('filled')
})