import { Link, useLocation } from "react-router-dom";
import { NavbarType } from "../types";
import { Dispatch } from "react";

const NavLink = ({
  item,
  setIsOpen,
  toggle,
}: {
  item: NavbarType;
  setIsOpen?: Dispatch<boolean>;
  toggle?: boolean;
}) => {
  const pathName = useLocation().pathname;
  return (
    <Link
      to={item.path}
      key={item.id}
      className={` ${pathName === item.path ? "text-secondary" : ""} link ${
        toggle ? "text-xl py-5" : ""
      }`}
      onClick={() => setIsOpen && setIsOpen(false)}
    >
      {item.nav}
    </Link>
  );
};

export default NavLink;
