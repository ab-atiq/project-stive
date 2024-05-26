import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <Banner />
      <h1 className="text-xl">Products</h1>
      <Products />
    </>
  );
};

export default Home;
