import { fetchAccessories } from "../utils/api.js";

async function accessoriesPage() {
  const accessories = await fetchAccessories();

  document.getElementById("page-title").innerHTML = "Accessories";

  const accessoryList = accessories.map((accessory) => {
    return "<li>" + accessory.accessoryName + "</li>";
  });
  const accessoryHTMLList = accessoryList.join("");

  document.getElementById("app").innerHTML =
    '<ul id="product-list">' + accessoryHTMLList + "</ul>";
}

export default accessoriesPage;
