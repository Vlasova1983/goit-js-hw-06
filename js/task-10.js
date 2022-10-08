function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener ('click', createBoxes);
destroyBtn.addEventListener ('click',  destroyBoxes);

 function createBoxes() {
  let sideLength = 20;
    for(let i=0; i<= input.value-1;i+=1){
      const lastItem = document.createElement("div");
      sideLength+=10;
      lastItem.style.height = sideLength+10 + 'px';
      lastItem.style.width = sideLength+10 + 'px';
      lastItem.style.background = getRandomHexColor();
      lastItem.style.margin = '10px';
      boxes.append(lastItem);     
    }
 } 

function destroyBoxes() {
  for(let i=0; i<= input.value-1;i+=1){
   const deleteBoxes = document.querySelector('#boxes div');
   deleteBoxes.remove();
  }
}