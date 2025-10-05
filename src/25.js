const input = document.getElementById('name-input')
const greetingText = document.getElementById('greet')

button.onclick = () => {
    const Name = input.value;

    if (Name.trim() !== ''){
        greetingText.innerText = `안녕하세요 ${Name}님!`;

        input.value = ''
    }
}