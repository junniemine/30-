 const stars = document.querySelectorAll('.star');

 stars.forEach((star,clickedIndex)=>{
    star.addEventListener('click',()=>{
        stars.forEach((s,index) => {
            if (index <= clickedIndex){
                s.classList.add('filled')
            } else {
                s.classList.remove('filled')
            };
        });
    });
 })