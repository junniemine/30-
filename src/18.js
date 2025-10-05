const I = document.getElementById('todo-input')
const A = document.getElementById('submit')
const L = document.getElementById('todo-list')

A.addEventListener('click',()=>{
    const newText = I.value.trim()

    if (newText !== ''){
        const list = document.createElement('li');
        list.innerText = newText

        list.addEventListener('click',()=>{
            list.classList.toggle('completed')
        });

        L.appendChild(list);

        I.value = '';
    }

})