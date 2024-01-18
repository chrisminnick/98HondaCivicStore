import { products, accessories } from '../data/index.js';

function render() {
  switch (location.pathname) {
    case '/':
      homePage();
      break;
    case '/cart':
      cartPage();
      break;
    case '/products':
      productPage();
      break;
    case '/accessories':
      accessoriesPage();
      break;
    default:
      document.getElementById('page-title').innerHTML = 'Unknown Page';
  }
}

function productPage() {
  document.getElementById('page-title').innerHTML = 'Products';

  document.getElementById('app').innerHTML =
    '<ul><li>A 1998 Honda Civic</li></ul>';
}

function accessoriesPage() {
  document.getElementById('page-title').innerHTML = 'Accessories';

  const accessoryList = accessories.map((accessory) => {
    return '<li>' + accessory.accessoryName + '</li>';
  });

  const accessoryHTMLList = accessoryList.join('');

  document.getElementById('app').innerHTML =
    '<ul id="product-list">' + accessoryHTMLList + '</ul>';
}

function cartPage() {
  document.getElementById('page-title').innerHTML = 'Cart';
}

function homePage() {
  document.getElementById('page-title').innerHTML = 'Thanks for Visiting';
}

function navigate(url) {
  history.pushState('', '', url);
  render();
}

document.addEventListener('DOMContentLoaded', render);
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
  .getElementById('homeLink')
  .addEventListener('click', () => navigate('/'));
