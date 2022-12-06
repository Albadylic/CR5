const input = document.querySelector("#input-box");
const submitButton = document.querySelector("button");
const output = document.querySelector("output");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value === "") {
    output.textContent = "Please enter an input";
  } else {
    output.textContent = checkInput(input.value);
  }
});

function checkInput(string) {
  const newArray = string.split(" ").map((word) => {
    let letters = word.split("");
    let initial = letters.shift().toUpperCase();
    letters.unshift(initial);
    return letters.join("");
  });

  return newArray.join(" ");
}
