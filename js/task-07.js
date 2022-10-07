const sliderInput = document.querySelector('#font-size-control');
const fondText = document.querySelector('#text');


sliderInput.addEventListener ('input', onSlidarInput);

function onSlidarInput () {
    fondText.style.fontSize = sliderInput.value +"px";
 
}