const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener ('input', onInputInput);

function onInputInput () {
    nameOutput.textContent = nameInput.value; 
    if (nameInput.value == '') {
      nameOutput.textContent = 'Anonymous';
    }
}   

 


