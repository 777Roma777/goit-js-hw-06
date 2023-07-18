const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", borderColor);

function borderColor(e) {
  //   console.log(e.currentTarget.value);
  const inputLength = Number(validInput.getAttribute("data-length"));
  if (e.currentTarget.value.trim().length === inputLength) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
}
