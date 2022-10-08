const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector("#ingredients");

// for (let i=0; i<=ingredients.length-1;i+=1){
//  const lastItem = document.createElement("li");
//  lastItem.classList.add('item')
//  lastItem.textContent = ingredients[i];
//  list.append(lastItem);
// }

const classLi ='item';
const listIngredients =[];
for (let i=0; i<=ingredients.length-1;i+=1){
  const ingredient = ingredients[i];
  const listIngredient= `<li class= "${classLi}"> ${ingredient} </li>` 
  listIngredients.push(listIngredient);
}
const listEl = document.querySelector("#ingredients");
listEl.insertAdjacentHTML('beforeend', listIngredients.join(''));
  