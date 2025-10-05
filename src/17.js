let text = "Hi, I am Han. Nice to meet you."
let index = 0;

const B = document.getElementById('button')
const type = document.getElementById('typing')

B.addEventListener('click',()=>{
    type.innerText = '';
    index = 0;

    const act = setInterval(()=>{
        if (index < text.length ){
            type.innerText += text[index];
            index++;
        } else{
            clearInterval(act);
        }
    },100)
})