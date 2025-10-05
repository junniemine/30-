let currentOpacity=1;

container.onclick=()=>{
    currentOpacity-=0.1;
if (currentOpacity<0){
    currentOpacity=1;
}
container.style.opacity = currentOpacity;s}
