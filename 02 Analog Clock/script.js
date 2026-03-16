const hourHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const hand = document.querySelector(".hand");
const transition = "all 0.5s cubic-bezier(0, 3.15, 0.6, 1)";

function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;

  if (secondsDegree >= 430) hand.style.transition = "";
  else if (secondsDegree > 0) hand.style.transition = transition;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minsHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  //   console.log(hours, minutes, seconds);
  //   console.log(secondsDegree);
}

setInterval(setTime, 1000);
