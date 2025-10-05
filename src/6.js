container.onclick=()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
   container.style.boxShadow=`10px 10px 15px 5px rgb(${r},${g},${b})`;
}