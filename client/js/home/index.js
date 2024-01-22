export default function homePage() {
  homeHelper();
}

function homeHelper() {
  document.getElementById("page-title").innerHTML = "Thanks for Visiting";

  document.getElementById("app").innerHTML =
    "<img id=spin src=https://media-r2.carsandbids.com/cdn-cgi/image/width=1800,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/KPdQOoy7.L8zeYcs0Y-(edit).jpg?t=162350711773/>" +
    "<h2>1998 Honda Civic only 26 years old!!!!</h2>";
}
