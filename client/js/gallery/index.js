import { fetchGallery } from "../utils/api.js";

async function galleryPage() {
  console.log("made it to the gallery function");
  const gallery = await fetchGallery();
  console.log("got gallery function");

  document.getElementById("page-title").innerHTML = "Gallery";

  const imageList = gallery.map((image) => {
    return "<img src=" + image.imageURL + ">";
    // <img src=imageURL>
  });
  const galleryHTMLList = imageList.join("");

  document.getElementById("app").innerHTML = "<div class='galleryImages'>" + galleryHTMLList + "</div>";
}

export default galleryPage;
