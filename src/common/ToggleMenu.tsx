import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdDeleteForever, MdOutlineShoppingBag } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { navbar } from "../data/Data";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import useCartStore from "../store/Cartstore";

const ToggleMenu = ({ menu, isCart }: { menu?: boolean; isCart?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef<HTMLDivElement | null>(null);

  const { cart, clearCart, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        outsideRef.current &&
        !outsideRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={outsideRef}>
      {menu ? (
        <IoMenu
          size={30}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        />
      ) : (
        <div className="relative">
          <MdOutlineShoppingBag
            size={25}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-white text-xs flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </div>
      )}

      <div
        className={`fixed top-0 right-0 w-[70%] sm:w-[350px] h-screen bg-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <CgClose
          size={30}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-4 left-4"
        />
        {menu && (
          <div className="flex flex-col items-center justify-center mt-40">
            {navbar.map((item) => (
              <NavLink key={item.id} item={item} setIsOpen={setIsOpen} toggle />
            ))}
          </div>
        )}
        {isCart && (
          <div className="p-4 flex flex-col h-full">
            <h2 className="text-heading text-center mt-10 text-xl md:text-2xl font-semibold mb-4">
              Cart Items
            </h2>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 px-4">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        ${item.quantity && item.price * item.quantity}
                      </p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>
                      <MdDeleteForever
                        size={30}
                        className="cursor-pointer text-red-500"
                      />
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">Cart is empty</div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-4 space-y-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total:</span>
                <span>${totalPrice()}</span>
              </div>
              <button
                onClick={clearCart}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              >
                Clear Cart
              </button>
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full block mt-3 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg text-center"
              >
                View Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleMenu;
