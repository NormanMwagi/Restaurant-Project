export const about = function () {
  const container = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = "About Us";

  const text = document.createElement('p');
  text.textContent = "Welcome to Swahili Cuisine Restaurant, where traditional flavors meet modern dining. Our mission is to deliver authentic East African meals in a cozy and elegant setting.";

  container.append(title, text);
  return container;
};