const body=document.body;

container.onclick=()=> {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        container.innerText='day mode';}
    else{
        container.innerText='night mode'
    }}