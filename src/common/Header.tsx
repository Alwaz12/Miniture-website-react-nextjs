import { navbar } from "../data/Data";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { useEffect, useState } from "react";
import ToggleMenu from "./ToggleMenu";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import useWishlistStore from "../store/WishlistStore";

const Header = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const { wishlist } = useWishlistStore();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`h-[75px] flex items-center justify-between duration-300 transition-shadow ${
        sticky ? "sticky top-0 z-50 shadow-md bg-white" : ""
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-semibold">
          Minitrue
        </Link>
        <div className="items-center gap-5 lg:gap-10 hidden md:flex">
          {navbar.map((item) => (
            <NavLink item={item} key={item.id} />
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <Link to="/wishlist" className="relative">
            <HiOutlineHeart size={25} className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-white text-xs flex items-center justify-center rounded-full">
              {wishlist.length}
            </span>
          </Link>
          <ToggleMenu isCart />
          <HiOutlineUser size={25} className="cursor-pointer" />
          <div className="md:hidden">
            <ToggleMenu menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
