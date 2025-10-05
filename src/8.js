let thickBorder= 1;

container.onclick=()=>{
    thickBorder+=1;
    container.style.borderWidth = `${thickBorder}px`;
}