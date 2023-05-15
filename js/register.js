const registerForm = document.querySelector('#register-form')
registerForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    var username = document.getElementById('register-username').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('register-confirm-password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Por favor, complete todos los campos');
        return;
      }
    
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
    Users.push({username: username, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'login.html'

})