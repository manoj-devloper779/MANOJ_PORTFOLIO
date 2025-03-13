// popup form start
function showPopup() {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    overlay.style.display = "block";
    setTimeout(() => {
      popup.classList.add("active");
    }, 10);
  }
  
  function hidePopup() {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 300);
  }
// popup form end 

const firebaseConfig = {
    apiKey: "AIzaSyBdwMqX4Xa1ZDs1aMzHB1t3tuul3UOB0Qc",
    authDomain: "manoj-portfolio-ffb64.firebaseapp.com",
    databaseURL: "https://manoj-portfolio-ffb64-default-rtdb.firebaseio.com",
    projectId: "manoj-portfolio-ffb64",
    storageBucket: "manoj-portfolio-ffb64.firebasestorage.app",
    messagingSenderId: "200138913451",
    appId: "1:200138913451:web:353f4bf8f35cdcd22469ee",
    measurementId: "G-B7MES67BD1"
  };
//   initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("leadForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, email, message);
  hidePopup();
  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
 

  //   reset the form
  document.getElementById("contactForm").reset();
  
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
    timestamp: new Date().toISOString()

  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

