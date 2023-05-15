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


// Registro de usuario
var registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('register-username').value;
  var email = document.getElementById('register-email').value;
  var password = document.getElementById('register-password').value;
  var confirmPassword = document.getElementById('register-confirm-password').value;

  if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  var userData = {
    username: username,
    email: email,
    password: password
  };
  localStorage.setItem('userData', JSON.stringify(userData));

  alert('¡Registro exitoso!');

  setTimeout(function() {
    window.location.replace("../indexLog.html");
  }, 1000);
});


var loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var storedData = localStorage.getItem('userData');

  if (storedData) {
    var userData = JSON.parse(storedData);

    if (username === userData['username'] && password === userData['password']) {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Inicio de sesión fallido');
    }
  } else {
    alert('No se encontraron datos de usuario');
  }
});

function showPopup(event) {
  event.preventDefault(); 
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
}

function closePopupt(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
  var storedData = localStorage.getItem('userData');

  if (storedData) {
    var userData = JSON.parse(storedData);
    var usernameElement = document.getElementById('username');
    
    if (usernameElement) {
      usernameElement.textContent = userData.username;
    }
    
    var cuentasElement = document.querySelector('li > a[href="#"] + ul');
    if (cuentasElement) {
      cuentasElement.style.display = 'none';

      var logoutElement = document.createElement('a');
      logoutElement.href = '#';
      logoutElement.textContent = 'Logout';
      logoutElement.addEventListener('click', function() {
        localStorage.removeItem('userData');
        window.location.replace('login.html');
      });

      cuentasElement.parentNode.insertBefore(usernameElement, cuentasElement.nextSibling);
      cuentasElement.parentNode.insertBefore(logoutElement, cuentasElement.nextSibling);
    }
  } else {
    // Si no hay datos de usuario registrado, redireccionar a la página de login
    window.location.replace('login.html');
  }
});
