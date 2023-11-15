const second = document.querySelector("#second");
const minute = document.querySelector("#minute");
const hour = document.querySelector("#hour");
const timer = document.querySelector("#timer");

setInterval(() => {
  clockHandler()
}, 1000);

function clockHandler() {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}


setInterval(() => {
  var d = new Date();
  var h = addLeadingZero(d.getHours());
  var m = addLeadingZero(d.getMinutes());
  var s = addLeadingZero(d.getSeconds());

  const finalTime = `${h} : ${m} : ${s}`
  timer.textContent = finalTime
  console.log(finalTime)
  
}, 1000);

function addLeadingZero(number) {
  return (number < 10 ? "0" : "") + number;
}