import { ProductsType } from "../types";
import { BiCart } from "react-icons/bi";
import useCartStore from "../store/Cartstore";
import { AiOutlineEye } from "react-icons/ai";
import AddToWishlist from "./AddToWishlist";

const ProductCard = ({
  product,
  handleOpen,
}: {
  product: ProductsType;
  handleOpen?: (id: number) => void;
}) => {
  const { addToCart } = useCartStore();
  return (
    <div className="m-2">
      <div className="relative group">
        <img src={product.img} alt="product img" className="rounded-3xl" />
        <div className="absolute top-2 right-2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <AddToWishlist product={product} />
          <div
            onClick={() => handleOpen && handleOpen(product.id)}
            className="bg-white p-2 md:p-4 rounded-full cursor-pointer"
          >
            <AiOutlineEye />
          </div>
        </div>
        <div className="bg-black text-white absolute bottom-2 right-2 h-8 w-8 md:h-12 md:w-12 grid place-items-center rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button onClick={() => addToCart(product)} className="text-2xl">
            <BiCart />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-secondary font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
