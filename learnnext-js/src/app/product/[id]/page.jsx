

const ProductPage = ({params}) => {
 

  if (!params.id) {
    return <p>Loading...</p>;
  }

  return <div>Product ID: {params.id}</div>;
};

export default ProductPage;
