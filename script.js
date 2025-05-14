// You have to select button (using document.querySelector)
// You have to create event on click (addEventListener)
// You have to toggle the content you want by selecting it and add/remove classList

// function lightmode {
//    const body = document.body
//     const wasLightmode = localStorage.getItem('light') == 'true'


//     localStorage.setItem('lightmode', !wasLightmode)
//     body.classList.toggle('light-mode', !wasLightmode)
// }

// document.querySelector('.bi').addEventListener('click', lightmode)



const toggle = document.getElementById('toggleDark');

const body = document.querySelector('body');
const name = document.querySelector('.name');
const role = document.querySelector('.role');
const end_texts = document.querySelector('.end_texts');
const header = document.querySelector('.header');
const header_text = document.querySelector('.header_text');
const bi = document.querySelector('.bi');
const navlink1 = document.querySelector('.nav-link1');
const navlink2 = document.querySelector('.nav-link2');
const navlink3 = document.querySelector('.nav-link3');
const navlink4 = document.querySelector('.nav-link4');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        // body.style.background = 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url(R.jpg)';
        body.style.color = 'black';
        body.style.transition = '2s';
        name.style.color = 'white';
        role.style.color = 'white';
        role.style.color = 'white';
        end_texts.style.color = 'white';
        header.style.background = 'black';
        header_text.style.color = 'white';
        bi.style.color = 'white';

       navlink1.style.color = 'white';
       navlink2.style.color = 'white';
       navlink3.style.color = 'white';
       navlink4.style.color = 'white';
    }else{
        // body.style.background = 'linear-gradient(rgba(190, 190, 190, 0.6),rgba(184, 184, 184, 0.6)), url(R.jpg)';
        body.style.color = 'white';
        body.style.transition = '2s';
        name.style.color = 'black';
        role.style.color = 'black';
        role.style.color = 'black';
        end_texts.style.color = 'black';
        header.style.background = 'white';
        header_text.style.color = 'black';
        header.style.background = 'white';
        bi.style.color = 'black';

       navlink1.style.color = 'black';
       navlink2.style.color = 'black';
       navlink3.style.color = 'black';
       navlink4.style.color = 'black';

        // light
    }
});

