import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ProductsType } from "../types";
import useCartStore from "../store/Cartstore";
import { useState } from "react";

const Modal = ({
  isModalOpen,
  handleClose,
  data,
}: {
  isModalOpen: number | null;
  handleClose: () => void;
  data: ProductsType;
}) => {
  const { cart, addToCart, decrementQuantity, incrementQuantity } =
    useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    incrementQuantity(data.id);
    setQuantity((prev: number) => prev + 1);
  };

  const handleDecrement = () => {
    decrementQuantity(data.id);
    if (quantity > 1) setQuantity((prev: number) => prev - 1);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content m-[1rem] w-full md:w-[80%] lg:w-[70%] relative bg-white overflow-hidden rounded-3xl">
            <span
              className="absolute top-0 right-0 p-2"
              onClick={() => handleClose()}
            >
              <FaTimes size={20} />
            </span>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="relative">
                <div className="flash_sale_img">
                  <img src={data.img} alt="img" className="rounded-2xl" />
                </div>
              </div>

              <div className="modal-info">
                <p className="mb-2 font-bold">{data.short_description}</p>
                <p className="text-red-600 text-xl">${data.price}</p>
                <p className="my-2">${data.description}</p>

                <div className="flex items-center mb-2">
                  <p className="font-semibold mr-2 ">Shades: </p>
                  <select
                    name="shades"
                    id="sahges"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  >
                    <option value="options">Choose an Options</option>
                    <option value="options">1 Choose an Options</option>
                    <option value="options"> 2 Choose an Options</option>
                    <option value="options">3 Choose an Options</option>
                    <option value="options"> 4Choose an Options</option>
                  </select>
                </div>
                <p className="text-green-700 m-0">In Stock 400 Items</p>
                <div className="flex items-center mt-4">
                  <div className="flex mr-3">
                    <button
                      onClick={() => handleDecrement()}
                      className="border w-9 h-9 grid place-content-center"
                    >
                      <PiMinus />
                    </button>
                    <span className="border w-9 h-9 grid place-content-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement()}
                      className="border w-9 h-9 grid place-content-center"
                    >
                      <PiPlus />
                    </button>
                  </div>

                  <button className="bg-secondary text-white rounded-xl px-3 py-2 mr-3">
                    {cart.some((item) => item.id === data.id) ? (
                      <span>
                        <Link to="/cart">View Cart</Link>
                      </span>
                    ) : (
                      <span onClick={() => addToCart(data)}>Add To Cart</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
