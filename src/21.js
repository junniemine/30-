document.body.addEventListener('click',(event)=>{
    const x = event.clientX;
    const y = event.clientY;

    const rippleElement = document.createElement('span');

    rippleElement.style.left = `${x}px`;
    rippleElement.style.top = `${y}px`;

    rippleElement.classList.add('ripple');

    document.body.appendChild(rippleElement);

    setTimeout(()=>{
        rippleElement.remove();
    },500)
})
