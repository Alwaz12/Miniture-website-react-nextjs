import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners } from "../data/Data";
import { Link } from "react-router-dom";
import { MdOutlineChair } from "react-icons/md";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };

  return (
    <div className="container relative overflow-hidden my-10">
      {/* Overlay */}
      <div className="absolute inset-0 w-[calc(100%-64px)] h-[calc(100%-10px)] left-[32px] z-10 bg-black/30 pointer-events-none rounded-3xl"></div>
      <div className="absolute z-10 top-[50px] md:top-[80px] lg:top-[100px] left-[70px] md:left-[100px] lg:left-[200px] text-white text-base md:text-2xl lg:text-3xl xl:text-6xl">
        <button className="flex items-center gap-3">
          <MdOutlineChair
            size={30}
            className="h-7 lg:h-10 w-10 lg:w-14 bg-secondary text-white p-1 lg:p-2 rounded-full"
          />
          <span>Elevate Your Lifestyle</span>
        </button>
        <p className="my-3 md:my-5 lg:my-10">with Our Furniture</p>
        Creations
        <Link
          to="/shop"
          className="bg-secondary text-sm md:text-lg lg:test-2xl xl:text-4xl ml-3 px-3 rounded-full"
        >
          Shop Now
        </Link>
      </div>
      <div className="w-full">
        <Slider {...settings}>
          {banners.map((data, key) => (
            <div className="banner-slider rounded-3xl" key={key}>
              <img
                src={data.banner}
                alt="databannerinmg"
                className="rounded-3xl h-72 md:h-full"
                width={"100%"}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
