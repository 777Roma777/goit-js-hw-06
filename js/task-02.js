const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const listIngredients = ingredients.reduce((accumulator, item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  accumulator.push(li);
  return accumulator;
}, []);

ulEl.append(...listIngredients);

document.body.appendChild(ulEl);


