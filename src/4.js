let currentAngle=0;

container.onclick=()=>{
    currentAngle+=45;
    container.style.transform=`rotate(${currentAngle}deg)`;
}