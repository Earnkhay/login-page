// import 'bootstrap';
// import bootstrap from 'bootstrap'
// import "node_modules/bootstrap/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';


































const loginForm = document.getElementById('login-form'),
      email = document.getElementById('email'),
      password = document.getElementById('inputPassword');

loginForm.addEventListener('submit', login);

function login(e) {
    e.preventDefault();
}

// email.addEventListener('blur', validateEmail);
// password.addEventListener('blur', validateLength);
