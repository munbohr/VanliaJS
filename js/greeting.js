const greeting = document.querySelector("#greeting-form")
const greetingUserName = document.querySelector("#greeting-form p")
const greetingInput = document.querySelector("#greeting-form input")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function handleGreeting(event) {
   event.preventDefault();
   greetingInput.classList.add(HIDDEN_CLASSNAME);
   const username = greetingInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   containText(username);
}
function containText(username) {   
   greeting.classList.remove(HIDDEN_CLASSNAME);
   greetingUserName.innerText = `Hello ${username}`;
   greetingUserName.style.color = "whitesmoke";
   greetingUserName.style.fontSize = "40px";
   greetingUserName.style.fontWeight = "300";
   greetingUserName.style.fontFamily = `'Bebas Neue', cursive`;
}
const saveUsername = localStorage.getItem(USERNAME_KEY, USERNAME_KEY);
if(saveUsername === null) {
   
   greeting.addEventListener
}
greeting.addEventListener("submit",handleGreeting)