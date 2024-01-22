export default function homePage() {
  homeHelper();
}

function homeHelper() {
  document.getElementById('page-title').innerHTML = 'Thanks for Visiting';
  document.getElementById('app').innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/96-98_Honda_Civic_LX_sedan.jpg/280px-96-98_Honda_Civic_LX_sedan.jpg' alt='a 1998 Honda Civic' />";
}
