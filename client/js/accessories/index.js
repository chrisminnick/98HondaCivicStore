import { fetchAccessories } from "../utils/api.js";

async function accessoriesPage() {
  try {
    const accessories = await fetchAccessories();

    document.getElementById("page-title").innerHTML = "Accessories";

    const accessoryList = accessories.map((accessory) => {
      return `<tr><td>${accessory.accessoryName}</td><td>${accessory.description}</td><td>${accessory.price}</td></tr>`;
    });

    const HTMLAccessoryList = accessoryList.join("");

    const tableHeader =
      "<tr><th>Accessory Name </th><th>Accessory Desc </th><th>Accessory price </th></tr>";
    document.getElementById("app").innerHTML =
      "<table>" + tableHeader + HTMLAccessoryList + "</table>";
  } catch (error) {
    console.error("error with fetch", error);
  }
}

export default accessoriesPage;
