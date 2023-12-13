document.getElementById("start-btn").addEventListener("click", function () {
  console.log("hello");

  document.getElementById("start-btn").style.backgroundColor =
    genrateRandomRgb();

  setInterval(function () {
    document.getElementById("bg").style.backgroundColor = genrateRandomRgb();
  }, 2000);
});

function genrateRandomNumber() {
  return Math.random() * 255;
}

function genrateRandomRgb() {
  var randomR = genrateRandomNumber();
  var randomG = genrateRandomNumber();
  var randomB = genrateRandomNumber();

  return `rgb(${randomR},${randomG},${randomB})`;
}
