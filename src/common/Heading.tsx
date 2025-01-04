const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase text-center font-bold mb-10">
      {title}
    </h2>
  );
};

export default Heading;
