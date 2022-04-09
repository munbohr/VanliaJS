const API_KEY = "null";

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
   alert("error 401: can't find you. NO weather for you :( ");
}

navigator.geolocation.getCurrentPosition(onGeoSucces,onGeoError);