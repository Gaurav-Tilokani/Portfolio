const firebaseConfig = {
  apiKey: "AIzaSyAG5tUuOg6twu5gg8-TrhrV0PHkH6mwBig",
  authDomain: "portfoliodata-d7557.firebaseapp.com",
  databaseURL: "https://portfoliodata-d7557-default-rtdb.firebaseio.com",
  projectId: "portfoliodata-d7557",
  storageBucket: "portfoliodata-d7557.appspot.com",
  messagingSenderId: "914033159239",
  appId: "1:914033159239:web:16e21a3018f00f46535562",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

$("document").ready(function () {
  var typed = new Typed("#typing", {
    strings: ["WEB DEVELOPER.", "UI/UX DESIGNER.", "INVESTOR."],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });
});

const menu = document.getElementsByClassName("menu")[0];
const sections = document.getElementsByClassName("sections")[0];
const socialMedia = document.getElementsByClassName("socialMedia")[0];
const navbar = document.getElementsByClassName("navbar")[0];

menu.addEventListener("click", () => {
  sections.classList.toggle("active");
  socialMedia.classList.toggle("active");
  navbar.classList.toggle("active");
});

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var mail = getElementVal("mail");
  var phone = getElementVal("phone");
  var msg = getElementVal("msg");

  saveData(name, mail, phone, msg);

  // reset form
  document.getElementById("contactForm").reset();
}

const saveData = (name, mail, phone, msg) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    mail: mail,
    phone: phone,
    msg: msg,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
