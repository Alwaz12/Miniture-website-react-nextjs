const Offer = () => {
  return (
    <div className="container relative overflow-hidden rounded-3xl">
      <img
        src="/images/miniture/creation.jpg"
        alt="creation img"
        className="w-full h-[260px] md:h-full rounded-3xl"
      />
      <div className="flex flex-col">
        <span className="absolute top-0 right-[16px] sm:right-[32px] w-fit text-sm md:text-3xl lg:text-4xl bg-white py-4 px-3 rounded-l-full">
          CRAFT OWN FURNITURE
        </span>
        <span className="absolute top-12 md:top-16 right-[16px] sm:right-[32px] w-fit text-sm md:text-3xl lg:text-4xl bg-white py-4 px-3 rounded-l-full">
          Your new forever favorite are here
        </span>
      </div>
    </div>
  );
};

export default Offer;
