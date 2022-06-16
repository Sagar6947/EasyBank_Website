let navbar = document.querySelector('.nav-links');
let menuBtn = document.querySelector('.fa-bars');

menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('open');
}

