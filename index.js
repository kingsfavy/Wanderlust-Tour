// script.js

function signup() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  alert("welcome" + " " + firstName  + lastName);
}
 

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");
for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



 function about(){
document.getElementById("read"). innerHTML = "-- Our team of experienced travel experts takes pride în designing bespoke trips that cater to the unique preferences and interests of our clients. Whether you're seeking a thrilling safari în Africa, a romantic getaway în Europe, or a cultural immersion  în Asia, we have the expertise to turn your dreams into reality. We understand the importance of sustainability and responsible travel practices. That's why we partner wit eco-friendly accommodations, support local communities, and prioritize conservation efforts în every destination we visit. By traveling wit Wanderlust Expeditions, you can explore the world wit a clear conscience, knowing that your journey is making a positive impact on the planet. What sets Wanderlust Expeditions apart is our unwavering commitment to customer satisfaction. From the moment you inquire about a trip to the moment you retun hom, our dedicated team is wit you every step of the way, ensuring a seamless and stress-free experience. Whether it's arranging airport transfers, providing expert guides, or offering personalized recommendations, we goh abov and beyond to exceed your expectations.";

document.getElementById("btnn"). style . display = "none";

}


const time = new Date().getUTCFullYear();

document.getElementById("foot"). innerHTML = time;


let total = 0;
const packages = {
  "Package 1": 1500,
  "Package 2": 2000
};

function addToCart(packageName, price) {
  total += price;
  document.getElementById("total").innerText = "$" + total;
  
  const cartItems = document.getElementById("cart-items");
  const li = document.createElement("li");
  li.textContent = `${packageName} - $${price}`;
  cartItems.appendChild(li);
}

document.getElementById("package1").addEventListener("click", function() {
  const packageName = this.querySelector("h2").textContent;
  addToCart(packageName, packages[packageName]);
});

document.getElementById("package2").addEventListener("click", function() {
  const packageName = this.querySelector("h2").textContent;
  addToCart(packageName, packages[packageName]);
});



function formType(){
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageInput = document.querySelector('input[type="text"]');
  const submitButton = document.querySelector('.submit');

  // Function to validate email format
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Function to display success message
  function displaySuccessMessage() {
    alert('Form submitted successfully!');
    // You can also redirect the user or perform other actions here
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate inputs
    if (name === '') {
      alert('Please enter your name.');
      return;
    }

    if (email === '') {
      alert('Please enter your email.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (message === '') {
      alert('Please compose your message.');
      return;
    }

    // Submit the form
    displaySuccessMessage();

    // Clear form inputs
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }

  // Add event listener for form submission
  form.addEventListener('submit', handleSubmit);
});

}

function accordion(){
document.getElementById("panel1"). style .display =" block";
document.getElementById("panel2"). style .display ="none";
document.getElementById("panel3"). style .display ="none";
}

function accordion2(){
document.getElementById("panel1"). style .display ="none";
document.getElementById("panel2"). style .display ="block";
document.getElementById("panel3"). style .display ="none";
}

function accordion3(){
document.getElementById("panel1"). style .display ="none";
document.getElementById("panel2"). style .display ="none";
document.getElementById("panel3"). style .display ="block";

}
  