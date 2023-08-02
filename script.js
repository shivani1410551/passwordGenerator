let [millisecond, second, minutes, hour] = [0, 0, 0, 0];
let timer = document.querySelector(".timerDisplay");
let int;

function DisplayTimer() {
  millisecond += 10;
  if (millisecond === 1000) {
    millisecond = 0;
    second++;
    if (second === 60) {
      second = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hour++;
      }
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = hour < 10 ? "0" + minutes : minutes;
  let s = second < 10 ? "0" + second : second;
  let ms =
    millisecond < 10
      ? "00" + millisecond
      : millisecond < 100
      ? "0" + millisecond
      : millisecond;
  timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
// start
document.querySelector(".start").addEventListener("click", () => {
  int = setInterval(() => DisplayTimer(), 10);
  // pause
  document
    .querySelector(".pause")
    .addEventListener("click", () => clearInterval(int));
  // reset
  document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(int);
    [millisecond, second, minutes, hour] = [0, 0, 0, 0];
    timer.innerHTML = ` 00:00:00:000`;
  });
});
