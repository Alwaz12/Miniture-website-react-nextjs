import { useState } from "react";
import Heading from "../common/Heading";
import Modal from "../common/Modal";
import ProductCard from "../common/ProductCard";
import { products } from "../data/Data";
import { ProductsType } from "../types";
import { Link } from "react-router-dom";

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState<number | null>(null);

  const handleOpen = (productId: number) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };
  return (
    <>
      <div className="container my-20">
        <Heading title="Flash Sale" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 8).map((item) => (
            <ProductCard key={item.id} product={item} handleOpen={handleOpen} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/shop"
            className="bg-secondary text-white px-10 py-2 rounded-full hover:bg-orange-300 font-semibold duration-300 transition-all ease-in-out"
          >
            View All
          </Link>
        </div>
      </div>
      <Modal
        data={products.find((item) => item.id === isModalOpen) as ProductsType}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default FlashSale;
