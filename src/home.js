import ImgRes from './res.jpeg';

export const home = function () {
  const container = document.createElement('div');

  const hOne = document.createElement('h1');
  hOne.innerText = "Swahili Cuisine Restaurant";
  hOne.classList.add("heading");

  const image = document.createElement('img');
  image.src = ImgRes;

  const description = document.createElement('p');
  description.textContent =
    'Experience gourmet dining with locally-sourced ingredients and exceptional service in a cozy atmosphere.';

  container.append(hOne, image, description);
  return container;
};