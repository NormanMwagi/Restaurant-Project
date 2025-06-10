import './styles.css';
import { home } from './home';
import { menu } from './menu';
import { about } from './about';

function loadPage(contentBuilder) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.appendChild(contentBuilder());
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial load
  loadPage(home);

  // Tab buttons
  document.querySelector('.btn-home').addEventListener('click', () => loadPage(home));
  document.querySelector('.btn-menu').addEventListener('click', () => loadPage(menu));
  document.querySelector('.btn-about').addEventListener('click', () => loadPage(about));
});
