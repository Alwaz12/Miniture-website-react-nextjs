import Banner from "../components/Banner";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";
import Offer from "../components/Offer";
import TopProducts from "../components/TopProducts";
import Arrived from "../components/Arrived";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FlashSale />
      <Offer />
      <TopProducts />
      <Arrived />
    </div>
  );
};

export default Home;
