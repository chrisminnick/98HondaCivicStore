import homePage from "../home/index.js";
import cartPage from "../cart/index.js";
import productPage from "../products/index.js";
import accessoriesPage from "../accessories/index.js";
import galleryPage from "../gallery/index.js";

function routes() {
  switch (window.location.hash) {
    case "":
      homePage();
      break;
    case "#/":
      homePage();
      break;
    case "#cart":
      cartPage();
      break;
    case "#products":
      productPage();
      break;
    case "#accessories":
      accessoriesPage();
      break;
    case "#gallery":
      galleryPage();
      break;
    default:
      document.getElementById("page-title").innerHTML = "Unknown Page";
  }
}

export default routes;
