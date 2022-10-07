const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const imagasContenerEl = document.querySelector(".gallery");
// const makeImagesPickerOptions = options => {
//   return options.map(option => {
//     const lastItem = document.createElement("li"); 
//     const lastImg = document.createElement("img");
//     imagasContenerEl.classList.add('js-gallery');
//     lastItem.classList.add('item');
//     lastImg.classList.add('img');
//     lastImg.src = option.url;
//     lastImg.alt = option.atl;
//     lastImg.width=300;

//     lastItem.appendChild(lastImg);
//     imagasContenerEl.appendChild(lastItem); 
//     return lastItem;
//    });
// }
// const elements = makeImagesPickerOptions(images);
// imagasContenerEl.append(...elements);

const classLi ='item';
const classImg = 'img';
const makeImage = ({url, alt}) => {  
  return `
   <li class= "${classLi}"> 
     <img class="${classImg}" src="${url}" alt="${alt}">
   </li> 
  `
 }
 
const imagasContenerEl = document.querySelector(".gallery");
imagasContenerEl.classList.add('js-gallery');
const makeImagas = images
  .map(makeImage)
  .join('');

imagasContenerEl.insertAdjacentHTML('beforeend', makeImagas);
 
 


