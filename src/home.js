import ImgRes from './res.jpeg';

const content = document.getElementById('content');
export const restaurant = function(){
    let hOne= document.createElement('h1');
    hOne.innerText = "Swahili Cuisine Restaurant";
    hOne.classList.add("heading");
    content.appendChild(hOne);
    const image = document.createElement('img');
    image.src = ImgRes;
    content.appendChild(image);
}