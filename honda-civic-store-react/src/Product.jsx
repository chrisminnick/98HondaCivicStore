function Product({ products = [] }) {
  return (
    <>
      <h1>A Honda Civic</h1>
      {products.map((product, index) => (
        <li key={index}>{product.productName}</li>
      ))}
    </>
  );
}
export default Product;
