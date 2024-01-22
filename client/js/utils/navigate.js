import routes from './routes.js';

export default function navigate(url) {
  history.pushState('', '', url);
  routes();
}
