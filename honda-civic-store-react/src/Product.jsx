function Product({ products = [] }) {
  return (
    <>
      {products.map((product, index) => (
        <li key={index}>{product.productName}</li>
      ))}
    </>
  );
}
export default Product;
