const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", borderColor);

function borderColor(e) {
  //   console.log(e.currentTarget.value);
  const inputLength = Number(validInput.getAttribute("data-length"));
  if (e.currentTarget.value.length == inputLength) {
    validInput.classList.add("valid");
    if (validInput.classList.contains("invalid")) {
      validInput.classList.remove("invalid");
    }
  } else {
    if (validInput.classList.contains("valid")) {
      validInput.classList.remove("valid");
    }
    validInput.classList.add("invalid");
  }
}
