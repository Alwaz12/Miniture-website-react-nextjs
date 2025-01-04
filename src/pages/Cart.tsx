import PageHeading from "../common/PageHeading";
import CartRow from "../common/CartRow";
import { Link } from "react-router-dom";
import useCartStore from "../store/Cartstore";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCartStore();
  return (
    <div>
      <PageHeading homePage="Home" page="Cart" />
      {cart.length > 0 ? (
        <div className="container my-10">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <table className="w-full overflow-x-scroll">
              <thead className="bg-blue-950 text-white font-semibold">
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">SubTotal</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <CartRow product={product} key={product.id} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 w-fit ml-auto">
            <button
              onClick={() => clearCart()}
              className="px-4 py-2 block bg-rose-800 hover:bg-rose-600 rounded-lg cursor-pointer text-white"
            >
              Clear Cart
            </button>
          </div>
          <div>
            <div className="p-6 w-full md:w-fit rounded-2xl shadow-2xl bg-white font-bold mt-5">
              <h1 className="mb-4 text-center text-3xl">Cart Total</h1>
              <h2 className="flex justify-between mt-5">
                Sub Total : <span>${totalPrice()}</span>
              </h2>
              <div className="flex justify-between mt-5">
                Shipping Charge : <span>free</span>
              </div>
              <div className="flex justify-between mt-5">
                Grand Total : <span>${totalPrice()}</span>
              </div>
              <div className="whitespace-nowrap flex flex-col lg:flex-row items-center gap-5 justify-between mt-5">
                <div className="px-4 py-2 bg-secondary hover:bg-orange-300 cursor-pointer rounded-lg text-white">
                  <button>Proceed To Checkout</button>
                </div>
                <div className="px-4 py-2 bg-rose-800 hover:bg-rose-600 rounded-lg cursor-pointer text-white">
                  <Link to={"/shop"}>Continue Shopping</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container my-40">
          <h1 className="text-center text-2xl">Cart is empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
