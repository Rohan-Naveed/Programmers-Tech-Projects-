"use strict";

var typed = new Typed(".typing", {
  strings: ["Front-End Developer.", "Web Designer.", "Programmer."],
  typeSpeed: 175,
  backSpeed: 175,
  loop: true,
});

const form = document.querySelector("form");
const senderFullName = document.getElementById("name");
const senderPhone = document.getElementById("phone");
const senderEmail = document.getElementById("email");
const senderMessage = document.getElementById("message");

function sendEmail() {
  let msgString = `<h1>Sender's Full Name :</h1>  ${senderFullName.value} <br>
                  <h1>Sender's Phone :</h1>  ${senderPhone.value} <br>
                  <h1>Sender's Email :</h1>  ${senderEmail.value} <br>
                  <h1>Sender's Message :</h1>  ${senderMessage.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rohan.naveed626899@gmail.com",
    Password: "2E9E5D303028F0A918E035756F9BC4184022",
    To: "rohan.naveed626899@gmail.com",
    From: "rohan.naveed626899@gmail.com",
    Subject: "Message From Personal Portfolio",
    Body: msgString,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
