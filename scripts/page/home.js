function timer(id, EndDate, EndTime) {
  let currentDate = Date.now();
  let endFullDate = Date.parse(`${EndDate}T${EndTime}`);
  let finalDate = endFullDate - currentDate;
  let seconds = Math.floor((finalDate / 1000) % 60);
  let minutes = Math.floor((finalDate / 1000 / 60) % 60);
  let hours = Math.floor((finalDate / (1000 * 60 * 60)) % 24);
  let days = Math.floor(finalDate / (1000 * 60 * 60 * 24));
  if (seconds >= 0 && seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes >= 0 && minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours >= 0 && hours < 10) {
    hours = `0${hours}`;
  }
  if (days >= 0 && days < 10) {
    days = `0${days}`;
  }
  let DateStr = days + ":" + hours + ":" + minutes + ":" + seconds;
  document.getElementById(id).innerHTML = DateStr;
  let timeinterval = window.setTimeout(timer, 1000, id, EndDate, EndTime);
  if (finalDate <= 0) {
    clearInterval(timeinterval);
    document.getElementById(id).innerHTML = "";
    document.getElementById("saleslider").innerHTML = "";
    new SaleSlider(".saleslideshow-container", ProductsStorage);
  }
}

document.getElementById("saleslider").innerHTML = "";
new SaleSlider(".saleslideshow-container", ProductsStorage);
