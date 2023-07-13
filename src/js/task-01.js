const categoriesUl = document.querySelectorAll(".item");

console.log(`Number of categories:${categoriesUl.length}`);

categoriesUl.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
