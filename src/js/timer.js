"use strict";

const startDate = new Date("2019-02-13T04:33:00");

function getTimeElapsed() {
  const now = new Date();
  const timeDiff = now.getTime() - startDate.getTime();

  const seconds = Math.floor(timeDiff / 1000),
    minutes = Math.floor(seconds / 60),
    hours = Math.floor(minutes / 60),
    days = Math.floor(hours / 24);

  const secondsElapsed = seconds % 60,
    minutesElapsed = minutes % 60,
    hoursElapsed = hours % 24;

  return {
    days,
    hours: hoursElapsed,
    minutes: minutesElapsed,
    seconds: secondsElapsed,
  };
}

getTimeElapsed();

function updateTimer() {
  const { days, hours, minutes, seconds } = getTimeElapsed();

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTimer, 1000);

updateTimer();
