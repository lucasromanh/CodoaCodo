let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

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


function showPopup(event) {
  event.preventDefault(); 
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function openPopupt(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopupt(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}

// const user = JSON.parse(localStorage.getItem('login_success')) || false
// if(!user){
//     window.location.href = 'login.html'
// }

// const logout = document.querySelector('#logout')

// logout.addEventListener('click', ()=>{
//     alert('Hasta pronto!')
//     localStorage.removeItem('login_success')
//     window.location.href = 'login.html'
// })