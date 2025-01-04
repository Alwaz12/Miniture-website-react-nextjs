import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import { WishlistStore } from "../types";

const useWishlistStore = create<WishlistStore>()(
  persist(
    (set) => ({
      wishlist: [],

      toggleWishlist: (product) => {
        set((state) => {
          const isExisting = state.wishlist.some(
            (item) => item.id === product.id
          );

          if (isExisting) {
            toast.success(`${product.title} removed from wishlist`);
            const updatedWishlist = state.wishlist.filter(
              (item) => item.id !== product.id
            );
            return { wishlist: updatedWishlist };
          } else {
            toast.success(`${product.title} added to wishlist`);
            const updatedWishlist = [...state.wishlist, product];
            return { wishlist: updatedWishlist };
          }
        });
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export default useWishlistStore;
