container.onclick=()=> {
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    document.getElementById("container").style.backgroundColor=`rgb(${r},${g},${b})`;
}