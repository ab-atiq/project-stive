import SingleProducts from "./SingleProducts";

const Products = () => {
  return (
    <>
      <div className="flex gap-2">
        <SingleProducts />
        <SingleProducts />
        <SingleProducts />
      </div>
    </>
  );
};

export default Products;
