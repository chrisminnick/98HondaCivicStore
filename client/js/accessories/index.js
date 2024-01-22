import { fetchAccessories } from "../utils/api.js";

async function accessoriesPage() {
  const accessories = await fetchAccessories();

  document.getElementById("page-title").innerHTML = "Accessories";

  const accessoryList = accessories.map((accessory) => {
<<<<<<< HEAD
    return "<li>" + accessory.accessoryName + "</li>";
  });
  const accessoryHTMLList = accessoryList.join("");

  document.getElementById("app").innerHTML =
    '<ul id="product-list">' + accessoryHTMLList + "</ul>";
=======

    return `<tr><td>${accessory.accessoryName}</td><td>${accessory.description}</td><td>${accessory.price}</td></tr>`;
  });

  const tableHeader =
    "<tr><th>Accessory Name </th><th>Accessory Desc </th><th>Accessory price </th></tr>";
  document.getElementById("app").innerHTML =
    "<table>" + tableHeader + accessoryList + "</table>";

>>>>>>> 358351b0e022339304bf7a63b6816fc43d08c5d4
}

export default accessoriesPage;
