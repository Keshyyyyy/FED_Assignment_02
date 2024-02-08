/*javascript for the sign in page*/

/*sign in page js*/
document.addEventListener('DOMContentLoaded', function () {
  const signInForm = document.querySelector('.sign-in-form');

  signInForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the form inputs
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Endpoint and API Key for RESTdb
    const url = 'https://firstdatabasefed-27c1.restdb.io/rest/newcollection';
    const apiKey = '65980ca2792c9fb0d537c66b';

    // Fetch the user data from RESTdb
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': apiKey
      }
    })
    .then(response => response.json())
    .then(users => {
      // Find the user with matching email and password
      const user = users.find(u => u.email === username && u.password === password);
      if (user) {
        // If user is found, redirect to the quiz
        window.location.href = 'BrainWave Quiz.html';
      } else {
        // If user is not found, alert the user
        alert('Invalid username or password.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while trying to sign in.');
    });
  });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.sign-up-form');
  
    signUpForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Collect user input using querySelector
      const name = document.querySelector('.sign-up-form input[type="text"]').value;
      const email = document.querySelector('.sign-up-form input[type="email"]').value;
      const password = document.querySelector('.sign-up-form input[type="password"]').value;
  
      // RESTdb API endpoint
      const url = 'https://firstdatabasefed-27c1.restdb.io/rest/newcollection';
      const apiKey = '65980ca2792c9fb0d537c66b';
  
      // Prepare the data to be sent
      const userData = {
        name: name,
        email: email,
        password: password
      };
  
      // Send the data to RESTdb
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-apikey': apiKey
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Sign-up successful!');
        // Optionally redirect the user or clear the form
        // window.location.href = 'BrainWave Quiz.html';
        window.location.href = 'BrainWave Quiz.html';
        signUpForm.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during sign-up.');
      });
    });
  });  




const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});




function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);

});

