import { products, accessories } from '../../data/index.js';
import homePage from '../home/index.js';
import cartPage from '../cart/index.js';
import productPage from '../products/index.js';
import accessoriesPage from '../accessories/index.js';

function routes() {
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
      accessoriesPage(accessories);
      break;
    default:
      document.getElementById('page-title').innerHTML = 'Unknown Page';
  }
}

export default routes;
