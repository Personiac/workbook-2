"use strict"

function showGreeting() {
    const messageDiv = document.getElementById("messageDiv");
    messageDiv.innerText = "Hello there!";
    console.log(typeof(messageDiv.innerText)); 
    console.log(parseInt(messageDiv.innerText));
}

showGreeting();
