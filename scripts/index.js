"use strict"

function reveal(){
    var reveals = document.querySelectorAll(".reveal"); //gets all elms 

    for (let i =0; i< reveals.length;i++){
        let wHeight = window.innerHeight; //viewport height
        let elementTop = reveals[i].getBoundingClientRect().top; //height from top element to VP
        let elementVisible = 150; //distance to from elm to top... to reveal


        //add 'attr' class active to revealed and hidden
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll",reveal);