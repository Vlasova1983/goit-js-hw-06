const itemCategories = document.querySelectorAll('.item');
console.log ('Number of categories:', itemCategories.length);
const titelCategories = document.querySelectorAll('h2');
const elementCategories = document.querySelectorAll('#categories ul');

for (let i=0; i<=titelCategories.length-1; i+=1) {
   console.log ('Category:', titelCategories[i].textContent);
   console.log ('Elements:',elementCategories[i].children.length); 
}







