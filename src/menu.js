export const menu = function () {
  const container = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = "Our Menu";

  const list = document.createElement('ul');
  list.innerHTML = `
    <li>Biriani ya Kuku</li>
    <li>Samaki wa Kupaka</li>
    <li>Viazi Karai</li>
    <li>Mahamri</li>
  `;

  container.append(title, list);
  return container;
};