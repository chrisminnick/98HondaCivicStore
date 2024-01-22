import { fetchProducts } from "../utils/api.js";

async function productPage() {
  const products = await fetchProducts();

  document.getElementById("page-title").innerHTML = "Products";

  const productList = products.map((product) => {
    return (
      "<li>" +
      "<b>" +
      product.productName +
      "</b>" +
      "  " +
      product.price +
      "<br>" +
      "<i>" +
      product.description +
      "</i>" +
      "</li>"
    );
  });
  const productHTMLList = productList.join("");

  document.getElementById("app").innerHTML =
    '<ul id="product-list">' + productHTMLList + "</ul>";
}
export default productPage;
