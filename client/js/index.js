import navigate from './utils/navigate.js';
import routes from './utils/routes.js';

document.addEventListener('DOMContentLoaded', routes);
document
  .getElementById('productLink')
  .addEventListener('click', () => navigate('products'));
document
  .getElementById('cartLink')
  .addEventListener('click', () => navigate('cart'));
document
  .getElementById('accessoriesLink')
  .addEventListener('click', () => navigate('accessories'));
document
  .getElementById('galleryLink')
  .addEventListener('click', () => navigate('gallery'));
document
  .getElementById('homeLink')
  .addEventListener('click', () => navigate('/'));
