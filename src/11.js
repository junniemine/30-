container.onclick=()=>{
    let currentNumber = container.innerText
    let Number = parseInt(currentNumber);
    Number += 1;
    container.innerText=Number;
}