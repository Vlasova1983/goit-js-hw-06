function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  

const changeBackgroundColorBtn = document.querySelector('.change-color');
const backgroundColorBody = document.querySelector('body');
const textColor = document.querySelector('.color');


changeBackgroundColorBtn.addEventListener ('click', onInputChangeBackgroundColorBtn);

function onInputChangeBackgroundColorBtn () {
  backgroundColorBody.style.background = getRandomHexColor();
  textColor.textContent = getRandomHexColor()
}
