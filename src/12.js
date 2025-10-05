const containers = document.querySelectorAll('.container');

containers.forEach(container => {
container.onclick=(event)=>{
    event.target.style.display='none';
}})