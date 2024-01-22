export async function fetchAccessories() {
  let response = await fetch("http://localhost:3000/accessories");
  let data = await response.json();
  // console.log(data)
  return data;
}

export async function fetchProducts() {
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  return data;
}

export async function fetchGallery() {
  let response = await fetch("http://localhost:3000/gallery");
  let data = await response.json();
  return data;
}
