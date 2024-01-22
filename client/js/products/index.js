import { fetchProducts } from "../utils/api.js";

async function productPage() {
  try {
    const products = await fetchProducts();

    document.getElementById("page-title").innerHTML = "Products";

    const productList = products.map((product) => {
      return `<tr><td>${product.productName}</td><td>${product.description}</td><td>${product.price}</td></tr>`;
    });
    // const productHTMLList = productList.join("");

    const tableHeader =
      "<tr><th>Product Name </th><th>Product Desc </th><th>Product price </th></tr>";
    document.getElementById("app").innerHTML =
      "<table>" + tableHeader + productList + "</table>";
  } catch (error) {
    console.error("error with fetch", error);
  }
}
export default productPage;
