container.onclick=()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
   container.style.color=`rgb(${r},${g},${b})`;
}