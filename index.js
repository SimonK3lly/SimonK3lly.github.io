let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;
// 
// 

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
}




function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classList += " dark-theme";
    }
    else{
        document.body.classList.remove("dark-theme");
    }
}



function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";


    emailjs
      .sendForm(
          'service_0x0r66l',
          'template_zph4zit',
          event.target,
          'user_MMIj52XpziKEGsa8KmSt9'
      ) .then (() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
      }) .catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("The email service is currently unavailable. Please contact me directly at simonkelly3@gmail.com");
      })
}


function toggleModal() {
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('myVideo');
    video.playbackRate = 2.5;
});