"use strict"

// https://alvarotrigo.com/blog/css-animations-scroll/
function reveal(){
    let reveals = document.querySelectorAll(".reveal"); //gets all elms 

    for (let i =0; i< reveals.length;i++){
        let windowHeight = window.innerHeight; //viewport height
        let elementTop = reveals[i].getBoundingClientRect().top; //height from top element to VP
        let elementVisible = 100; //distance to from elm to top... to reveal


        //add 'attr' class active to revealed and hidden
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll",reveal);

window.addEventListener("scroll",() => {
    let scrollP = document.getElementById('scroll-prompt')
    let scrollEnd = scrollP.getBoundingClientRect().top;
    if (scrollEnd < windowHeight - 100){
        scrollP.classList.add('end')
    } else{
        scrollP.classList.remove('end')
    }
});