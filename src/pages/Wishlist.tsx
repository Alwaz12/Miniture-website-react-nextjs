import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../common/Heading";
import ProductCard from "../common/ProductCard";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import useWishlistStore from "../store/WishlistStore";

const Wishlist = () => {
  const { wishlist } = useWishlistStore();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      {wishlist.length > 0 ? (
        <div className="my-20">
          <Heading title="My Wishlist❤️" />
          <div className="slider-container">
            <Slider {...settings}>
              {wishlist.map((item) => (
                <div key={item.id}>
                  <ProductCard product={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <div className="text-center h-[calc(100vh-75px)] grid place-content-center text-2xl md:text-4xl font-semibold">
          Your wishlist is empty😔
        </div>
      )}
    </div>
  );
};

export default Wishlist;
