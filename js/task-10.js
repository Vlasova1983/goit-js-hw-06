function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const boxesEl =[];

createBtn.addEventListener ('click', createBoxes);
destroyBtn.addEventListener ('click',  destroyBoxes);

function createBoxes() {  
  let sideLength = 20; 

  for(let i=0; i<= input.value-1;i+=1){
    sideLength+=10;
    const backgroundColorBox = getRandomHexColor();
    const lastItem = `<div style = "width:${sideLength}px; height:${sideLength}px; background:${backgroundColorBox}; margin:10px"></div>`;    
    boxesEl.push(lastItem);
  }

  boxes.insertAdjacentHTML('beforeend', boxesEl.join(''));
}

function destroyBoxes() {
  for(let i=0; i<= input.value-1;i+=1){
   const deleteBoxes = document.querySelector('#boxes div');
   deleteBoxes.remove();
  }  
}