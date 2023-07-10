//ref to greet button
const greetBtn = document.querySelector("#greet-btn");
//console.log(greetBtn);
const nameInput = document.querySelector("#name-input");
const greetMsg = document.querySelector("#greet-msg");

greetBtn.onclick = () => {
  //alert(nameInput.value);
  if (nameInput.value === "") {
    //show error msg
    greetMsg.innerText = "Pleasse insert your name";
    greetMsg.classList.add("text-denger");
  } else {
    //show hello name
    greetMsg.innerText = "Hello " + nameInput.value + " !";
    greetMsg.classList.remove("text-denger");
  }
};
