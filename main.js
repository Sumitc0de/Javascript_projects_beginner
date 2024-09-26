const bg_changer = document.querySelector('body');
const btn = document.querySelectorAll('.btn');

// console.log(bg_changer);

btn.forEach(function (btns) {
    btns.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(e.target.id === 'red'){
            bg_changer.style.backgroundColor = 'red'
        }
        else if(e.target.id === 'blue'){
            bg_changer.style.backgroundColor = 'blue'
        }
        else if(e.target.id === 'green'){
            bg_changer.style.backgroundColor = 'green'
        }
        else if(e.target.id === 'yellow'){
            bg_changer.style.backgroundColor = 'yellow'
        }
        else if(e.target.id === 'white'){
            bg_changer.style.backgroundColor = 'white'
        }
        else if(e.target.id === 'pink'){
            bg_changer.style.backgroundColor = 'pink'
        }
        else if(e.target.id === 'purple'){
            bg_changer.style.backgroundColor = 'purple'
        }
        else if(e.target.id === 'black'){
            bg_changer.style.backgroundColor = 'black'
        }
        else{
            bg_changer.style.backgroundColor = 'whitesmoke'
        }
    })
})