function init() {
    const greetButton = document.getElementById("greetBtn");
    //greetButton.addEventListener("click", onGreetUserBtnClicked());
}

function onGreetUserBtnClicked() {
    const nameField = document.getElementById("nameField");
    const nameInput = nameField.value;
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.innerText = (`"Hello, ${nameInput}!"`);
}

window.onload = init();