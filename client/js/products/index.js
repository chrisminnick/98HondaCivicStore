import { fetchProducts } from '../utils/api.js';

async function productPage() {
  const products = await fetchProducts();

  document.getElementById('page-title').innerHTML = 'Products';

  const productList = products.map((product) => {
    return '<li>' + product.productName + '</li>';
  });
  const productHTMLList = productList.join('');

  document.getElementById('app').innerHTML =
    '<ul id="product-list">' + productHTMLList + '</ul>';
}
export default productPage;
