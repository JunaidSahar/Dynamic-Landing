// Dom Variables

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  line = document.getElementById("line");

// show time

function showTime() {
  let currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds();

  // set am pm
  const amPm = hours >= 12 ? "PM" : "AM";

  // 12 hours formate
  hours = hours % 12 || 12;

  //output time
  time.innerHTML = `${hours}<span>:</span>${addZero(
    minutes
  )}<span>:</span>${addZero(seconds)}`;
  setTimeout(showTime, 1000);
}

// add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

showTime();

// show greeting according to time
function showGreeting() {
  let currentTime = new Date();
  hours = currentTime.getHours();

  if (hours < 12) {
    greeting.innerHTML = "Hey, Good Morning";
    line.innerHTML =
      "Enjoy the miracles of this beautiful morning and let them fill your heart with joy!";
  } else if (hours < 18) {
    greeting.innerHTML = "Hot Afternoon";
    line.innerHTML =
      "Hope you are ready to kick in the afternoon party and forget about the rest of your day.";
  } else if (hours < 22) {
    greeting.innerHTML = "Hello, Good Evening ";
    line.innerHTML =
      "Hope you are having a productive day and may you have a calculative tomorrow.";
  } else {
    greeting.innerHTML = "Good Night,";
    line.innerHTML =
      "Dreams of today will become a reality tomorrow. Have a restful sleep on this peaceful night! ";
  }
}
showGreeting();
