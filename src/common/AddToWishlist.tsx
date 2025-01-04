import { IoMdHeartEmpty } from "react-icons/io";
import useWishlistStore from "../store/WishlistStore";
import { ProductsType } from "../types";

const AddToWishlist = ({ product }: { product: ProductsType }) => {
  const { wishlist, toggleWishlist } = useWishlistStore();
  const isExisting = wishlist.some((item) => item.id === product.id);
  return (
    <div
      className={`bg-white p-2 md:p-4 rounded-full cursor-pointer ${
        isExisting ? "bg-rose-500 text-white" : ""
      }`}
      onClick={() => toggleWishlist(product)}
    >
      <IoMdHeartEmpty />
    </div>
  );
};

export default AddToWishlist;
