const url = "https://api.adviceslip.com/advice";

const adviceH1 = document.getElementById("advice");
const btn = document.querySelector(".dice__btn");
const number = document.querySelector(".advice__number");

async function showAdvice() {
  const request = new Request(url);

  const response = await fetch(request);
  const data = await response.json();

  const advice = data.slip.advice;
  const adviceNumber = data.slip.id;
  adviceH1.innerHTML = advice;
  number.innerHTML = "ADVICE #" + adviceNumber;
}

btn.addEventListener("click", () => {
  showAdvice();
});
