const series = "1 A 2 B 3 C 4 Ç 5 D 6 E 7 F 8 G 9 Ğ 10 H 11 I 12 İ 13 J";
const display = document.getElementById("display");
const button = document.getElementById("speedControl");
let speed = 100;
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

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      speed = 1000; // Yavaş hız (0.5x)
      displayOneByOne();
    }
  });