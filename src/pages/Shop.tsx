import { useState, useMemo } from "react";
import Modal from "../common/Modal";
import ProductCard from "../common/ProductCard";
import { products } from "../data/Data";
import { ProductsType } from "../types";
import PageHeading from "../common/PageHeading";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Shop = () => {
  const itemsPerPage = 8;
  const [isModalOpen, setIsModalOpen] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    priceRange: [0, 1500] as [number, number],
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const maxPrice = Math.max(...products.map((product) => product.price));

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(product.category)
      )
        return false;
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
        return false;

      const price = product.price;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });
  }, [filters.categories, filters.brands, filters.priceRange]);

  const handlePriceChange = (value: number | number[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: value as [number, number],
    }));
  };

  const handleCheckboxChange = (
    filterType: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[filterType] as string[];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...prevFilters, [filterType]: updatedValues };
    });
  };

  const handlePrev = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((page) => page + 1);
  };

  const handleOpen = (productId: number) => {
    setIsModalOpen(productId);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  const currentPageProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [currentPage, filteredProducts]);

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, maxPrice],
    });
  };

  return (
    <>
      <PageHeading homePage="Home" page="Shop" />
      <div className="container my-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Filters Section */}
          <div className="lg:span-1 bg-white shadow-lg p-3">
            <h2 className="text-2xl font-semibold mb-5">Filter</h2>

            {/* By Price */}
            <div className="mb-7">
              <h3 className="text-lg font-semibold mb-3">By Price</h3>
              <Slider
                min={0}
                max={maxPrice}
                range
                defaultValue={filters.priceRange}
                onChange={handlePriceChange}
              />
              <div className="flex justify-between">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>

            {/* By Categories */}
            <div className="mb-7">
              <h3 className="text-lg font-semibold mb-3">By Categories</h3>
              {categoryList.map((cat) => (
                <div key={cat} className="mb-3">
                  <input
                    type="checkbox"
                    id={`category-${cat}`}
                    className="cursor-pointer"
                    onChange={() => handleCheckboxChange("categories", cat)}
                    checked={filters.categories.includes(cat)}
                  />
                  <label htmlFor={`category-${cat}`} className="ml-2">
                    {cat}
                  </label>
                </div>
              ))}
            </div>

            {/* By Brands */}
            <div>
              <h3 className="text-lg font-semibold mb-3">By Brand</h3>
              {brandList.map((brand) => (
                <div key={brand} className="mb-3">
                  <input
                    type="checkbox"
                    id={`brand-${brand}`}
                    className="cursor-pointer"
                    onChange={() => handleCheckboxChange("brands", brand)}
                    checked={filters.brands.includes(brand)}
                  />
                  <label htmlFor={`brand-${brand}`} className="ml-2">
                    {brand}
                  </label>
                </div>
              ))}
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="mt-5 bg-secondary text-white px-4 py-2 rounded-full font-semibold"
            >
              Clear Filters
            </button>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-4">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-lg font-semibold">
                No products match your criteria.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {currentPageProducts.map((item) => (
                    <ProductCard
                      key={item.id}
                      product={item}
                      handleOpen={handleOpen}
                    />
                  ))}
                </div>
                {currentPageProducts.length > 0 && (
                  <div className="flex items-center justify-between mt-16">
                    <button
                      disabled={currentPage === 1}
                      onClick={handlePrev}
                      className={`bg-secondary text-white px-10 py-2 rounded-full font-semibold transition-all ${
                        currentPage === 1
                          ? "disabled:cursor-not-allowed disabled:bg-gray-500"
                          : "hover:bg-orange-300"
                      }`}
                    >
                      Prev
                    </button>
                    <button
                      disabled={
                        currentPage * itemsPerPage >= filteredProducts.length
                      }
                      onClick={handleNext}
                      className={`bg-secondary text-white px-10 py-2 rounded-full font-semibold transition-all ${
                        currentPage * itemsPerPage >= filteredProducts.length
                          ? "disabled:cursor-not-allowed disabled:bg-gray-500"
                          : "hover:bg-orange-300"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <Modal
        data={products.find((item) => item.id === isModalOpen) as ProductsType}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default Shop;
