let searchForm = document.querySelector('.header .search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
// }

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

const form = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   if (username.value.trim() === '') {
//     alert('Por favor ingrese su nombre de usuario');
//     return;
//   }
  
//   if (password.value.trim() === '') {
//     alert('Ingrese su password');
//     return;
//   }
//   form.submit();
// });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let nroVenta = getRandomInt(100000)
let mensaje = `<h3>Número de venta: ${nroVenta}</h3>`
document.getElementById(`nroVenta`).innerHTML = mensaje // + nroVenta