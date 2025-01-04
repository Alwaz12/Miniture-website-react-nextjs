import { MdDeleteForever } from "react-icons/md";
import { ProductsType } from "../types";
import useCartStore from "../store/Cartstore";

const CartRow = ({ product }: { product: ProductsType }) => {
  const { removeFromCart, decrementQuantity, incrementQuantity } =
    useCartStore();

  return (
    <tr className="text-center">
      <td className="px-4 py-2">
        <img
          src={product.img}
          alt=""
          className="size-14 md:size-24 rounded-xl"
        />
      </td>
      <td>{product.title}</td>
      <td>
        <span className="font-semibold">${product.price}</span>
      </td>
      <td>
        <div className="flex items-center gap-1 justify-center">
          <button
            onClick={() => decrementQuantity(product.id)}
            className="bg-blue-950 text-white size-8 grid place-content-center p-2 rounded-full"
          >
            -
          </button>
          <span className="mx-2">{product.quantity}</span>
          <button
            onClick={() => incrementQuantity(product.id)}
            className="bg-blue-950 text-white size-8 grid place-content-center p-2 rounded-full"
          >
            +
          </button>
        </div>
      </td>
      <td>
        <span className="font-semibold">
          ${product.quantity && product.price * product.quantity}
        </span>
      </td>
      <td onClick={() => removeFromCart(product.id)}>
        <MdDeleteForever
          size={30}
          className="mx-auto text-2xl cursor-pointer text-red-500"
        />
      </td>
    </tr>
  );
};

export default CartRow;
