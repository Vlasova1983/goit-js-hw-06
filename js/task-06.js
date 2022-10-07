const nameInput = document.querySelector('input[data-length="6"]');
nameInput.addEventListener ('blur', onInputFocus);

function onInputFocus() {   
    nameInput.classList.remove(`valid`);
    nameInput.classList.remove(`invalid`);       
    if (Number(nameInput.dataset.length) === nameInput.value.length) {
        nameInput.classList.add('valid');
    } 
    else{
        nameInput.classList.add('invalid');
    }
      
}
     

