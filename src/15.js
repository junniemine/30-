container.onclick=()=>{
    const W=window.innerWidth;
    const H=window.innerHeight;
    const bW=container.offsetWidth;
    const bH=container.offsetHeight;

    const X=Math.floor(Math.random()*(W-bW));
    const Y=Math.floor(Math.random()*(H-bH));

    container.style.top = `${Y}px`;
    container.style.left = `${X}px`;
}
