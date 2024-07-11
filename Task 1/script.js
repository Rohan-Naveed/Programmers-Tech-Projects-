"use strict";

console.log(10);

var typed = new Typed(".typing", {
  strings: ["Front-End Developer.", "Web Designer.", "Programmer."],
  typeSpeed: 175,
  backSpeed: 175,
  loop: true,
});

const form = document.querySelector("form");
const senderFullName = document.getElementById("name").textContent;
const senderPhone = document.getElementById("phone").textContent;
const senderEmail = document.getElementById("email").textContent;
const senderMessage = document.getElementById("message").textContent;

console.log(form);

let msgString = `Sender's Full Name : ${senderFullName} <br>
                  Sender's Phone : ${senderPhone} <br>
                  Sender's Email : ${senderEmail} <br>
                  Sender's Message : ${senderMessage}`;

console.log(msgString);
function sendEmail() {
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
