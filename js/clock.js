const clockone = document.querySelector("#clockone");
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
setInterval(ClockTwo, 1000);