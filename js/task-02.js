const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

for (let i=0; i<=ingredients.length-1;i+=1){
 const lastItem = document.createElement("li");
 lastItem.classList.add('item')
 lastItem.textContent = ingredients[i];
 list.append(lastItem);
}
