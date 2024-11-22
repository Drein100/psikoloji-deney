const series = ["1", "A", "2", "B", "3", "C", "4", "Ç", "5", "D", "6", "E", "7", "F", "8", "G", "9", "Ğ", "10", "H", "11", "I", "12", "İ", "13", "J"];
const display = document.getElementById("display");
let speed = 100;
let interval;
let index = 0;
let cycleCount = 0;

function displayOneByOne() {
    clearInterval(interval);
    interval = setInterval(() => {
      if (index < series.length) {
        display.textContent = series[index];
        index++;
      } else {
        index = 0;
        cycleCount++;
        if (cycleCount >= 2) {
          clearInterval(interval);
        }
      }
    }, speed);
  }

displayOneByOne();

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    speed = 1000; 
    displayOneByOne();
  }
});