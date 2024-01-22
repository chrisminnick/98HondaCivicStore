import routes from './routes.js';

export default function navigate(url) {
  window.location.hash = url;
  routes();
}
