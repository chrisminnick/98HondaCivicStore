import NavigationBar from './NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import './App.css';

function App() {
  return (
    <div>
      <h1>1998 Honda Civic Store</h1>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/product" element={<Product />} />
        <Route path="/accessories" element={<h1>Accessories</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </div>
  );
}

export default App;
