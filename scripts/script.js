const btn = document.getElementById("calculate");
const body = document.getElementsByTagName("body")[0];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const firstCoef = Number(document.getElementById("first-coef").value);
  const secondCoef = Number(document.getElementById("second-coef").value);
  const thirdCoef = Number(document.getElementById("third-coef").value);
  const discriminator = secondCoef ** 2 - 4 * firstCoef * thirdCoef;

  const resultElement = document.querySelector("#result");

  if (resultElement) {
    resultElement.parentNode.removeChild(resultElement);
  }

  const result = document.createElement("div");
  result.classList.add("result");
  result.id = "result";

  if (discriminator > 0) {
    const x1 = (-secondCoef - Math.sqrt(discriminator)) / (2 * firstCoef);
    const x2 = (-secondCoef + Math.sqrt(discriminator)) / (2 * firstCoef);

    result.innerHTML = `x₁ = ${x1} <br> x₂ = ${x2}`;
  } else if (discriminator === 0) {
    const x = -secondCoef / (2 * firstCoef);
    result.textContent = `x = ${x}`;
  } else {
    result.textContent = "Коренів немає";
  }

  body.appendChild(result);
});
