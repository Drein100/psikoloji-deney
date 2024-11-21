const series = "A B 3 2 C A 7 Q X Z 4 K";
const display = document.getElementById("display");
const button = document.getElementById("speedControl");
let speed = 200;
let interval;
let index = 0;

// Harfleri sırayla gösteren fonksiyon
function displayOneByOne(speed) {
  clearInterval(interval);
  interval = setInterval(() => {
    if (index < series.length) {
      display.textContent = series[index] === " " ? "" : series[index];
      index++;
    } else {
      index = 0;
    }
  }, speed);
}

// İlk hızlı gösterim
displayOneByOne(speed);

// Butona basıldığında hızı değiştir
button.addEventListener("click", () => {
  speed = 1000; // Yavaş hız (0.5x)
  displayOneByOne(speed);
});