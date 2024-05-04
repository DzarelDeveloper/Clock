let hrs = document.querySelector("#hrs");
let sec = document.querySelector("#sec");
let min = document.querySelector("#min");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hrs.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});

// digital clock
function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  document.getElementById("hours").textContent = formatTime(hours % 12 || 12);
  document.getElementById("minuts").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
  document.getElementById("ampm").textContent = ampm;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

setInterval(updateClock, 1000);
updateClock();
