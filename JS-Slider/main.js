const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const image = document.querySelectorAll('.images')

let slideNumber = 1

right.addEventListener('click',()=>{

    if(slideNumber < image.length){
        slider.style.transform =  `translateX( -${slideNumber*40}vw)`;
        slideNumber++;
    }else{
        slider.style.transform =  `translateX(0px)`;
        slideNumber = 1;
    }
   
});

left.addEventListener('click',()=>{

    if(slideNumber > 1){
        slider.style.transform =  `translateX( -${(slideNumber-2)*40}vw)`;
        slideNumber--;
    }else{
        slider.style.transform =  `translateX(-${(length-1)*40}vw)`;
        slideNumber = length;
    }
   
});
