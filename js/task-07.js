const fontSizeControl = document.querySelector("#font-size-control");

const mainText = document.querySelector("#text");

// console.log(fontSizeControl);
// console.log(mainText);

fontSizeControl.addEventListener("input", handleFontSizeChange);

handleFontSizeChange();

function handleFontSizeChange() {
  const fontSize = fontSizeControl.value;
  mainText.style.fontSize = `${fontSize}px`;
}
