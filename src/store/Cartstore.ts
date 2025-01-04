import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartStore } from "../types";
import toast from "react-hot-toast";

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            toast.success(
              `${product.title.slice(0, 10)}... quantity increased`
            );

            return {
              cart: state.cart.map((item) =>
                item.id === product.id && item.quantity
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            toast.success(`${product.title.slice(0, 10)}... added to cart`);

            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }
        });
      },

      removeFromCart: (id) => {
        set((state) => {
          const removedProduct = state.cart.find((item) => item.id === id);

          if (removedProduct) {
            toast.success(
              `${removedProduct.title.slice(0, 10)}... removed from cart`
            );
          }

          return {
            cart: state.cart.filter((item) => item.id !== id),
          };
        });
      },

      clearCart: () => {
        toast.success("Cart cleared");
        set({ cart: [] });
      },

      incrementQuantity: (id) => {
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.id === id && item.quantity
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );

          toast.success("Item quantity increased");

          return {
            cart: updatedCart,
          };
        });
      },

      decrementQuantity: (id) => {
        set((state) => {
          const updatedCart = state.cart.map((item) => {
            if (item.quantity && item.quantity > 1) {
              toast.success("Item quantity decreased");
              return { ...item, quantity: item.quantity - 1 };
            } else {
              get().removeFromCart(id);
            }
            return item;
          });

          return {
            cart: updatedCart,
          };
        });
      },

      totalPrice: () =>
        get().cart.reduce(
          (total, item) => total + item.price * (item.quantity ?? 0),
          0
        ),
    }),
    { name: "cart-storage" }
  )
);

export default useCartStore;
