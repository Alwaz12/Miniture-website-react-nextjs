export type NavbarType = {
  id: number;
  path: string;
  nav: string;
};

export type BannerType = {
  banner: string;
};

export interface CategoryType {
  id: number;
  img?: string;
  imgs?: { id: number; img: string; name: string }[];
  name: string;
}

export type ProductsType = {
  id: number;
  img: string;
  category: string;
  brand: string;
  title: string;
  short_description: string;
  price: number;
  description: string;
  quantity?: number;
};

export type ArriveItemType = {
  id: number;
  img: string;
};

export type OfferType = {
  customer_img: string;
  title: string;
  subtitle: string;
};
export type BrandType = {
  id: number;
  img: string;
  title: string;
  short_description: string;
};
export type FooterType = {
  id: number;
  header: string;
  content: string[];
};

export type CartStore = {
  cart: ProductsType[];
  addToCart: (product: ProductsType) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  clearCart: () => void;
  totalPrice: () => number;
};

export type WishlistStore = {
  wishlist: ProductsType[];
  toggleWishlist: (product: ProductsType) => void;
};
