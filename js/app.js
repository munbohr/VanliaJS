//---------------Todo List--------------------------
/*const toDoForm = document.querySelector("#login-form");
const toDoInput = document.querySelector("#login-form input")

function onClickTodo(event) {
   event.preventDefault();
} 

toDoInput.addEventListener("submit", onClickTodo);*/

//-----------------Clock design & get Clock------------------

/*const clockone = document.querySelector("#clockone");
const clocktwo = document.querySelector("#clocktwo");
clockone.style.color = "white";
clocktwo.style.color = "white";
//clockone.animate.


function ClockOne() {
   const nowDate = new Date();
   const months = String(nowDate.getMonth());
   const years = String(nowDate.getFullYear()).padStart(2, "0");
   const dates = String(nowDate.getDate()).padStart(2, "0");
   clockone.innerText = `${years}/${months}/${dates}`;
}
function ClockTwo() {
   const nowDate = new Date();
   const hours = String(nowDate.getHours()).padStart(2, "0");
   const minutes = String(nowDate.getMinutes()).padStart(2, "0");
   const seconds = String(nowDate.getSeconds()).padStart(2, "0");
   clocktwo.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(ClockOne, 1000);
setInterval(ClockTwo, 1000);*/

//--------------Greeting-submitInput------------------------

/*const greeting = document.querySelector("#greeting-form")
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
greeting.addEventListener("submit",handleGreeting)*/
//---------------Weather---------------------

/*const API_KEY = "cc5d8cfcd90b5f555db65b3d72edd894";

function onGeoSucces(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   fetch(url)
   .then(response => response.json())
   .then(data => {
       const weather = document.querySelector("#weather span:first-child");
       const city = document.querySelector("#weather span:last-child");
       weather.innerText = `${data.weather[0].main} / ${data.main.temp} in`;
       city.innerText = data.name;
       city.style.color = "whitesmoke";
       weather.style.color = "whitesmoke";
       city.style.fontFamily = `'Bebas Neue', cursive`;
       weather.style.fontFamily = `'Bebas Neue', cursive`;
   });
}


function onGeoError() {
   alert("error 404: can't find you. NO weather for you. ");
}*/

navigator.geolocation.getCurrentPosition(onGeoSucces,onGeoError);