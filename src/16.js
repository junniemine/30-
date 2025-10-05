button.onclick =()=>{
    const newNemo = document.createElement('div');
    newNemo.classList.add('nemo')

    const x=Math.floor(Math.random()*(window.innerWidth-50));
    const y=Math.floor(Math.random()*(window.innerHeight-50));

    newNemo.style.top =`${y}px`;
    newNemo.style.left =`${x}px`;

    document.body.appendChild(newNemo)
    }