import { Link } from "react-router-dom";

const PageHeading = ({
  homePage,
  page,
}: {
  homePage: string;
  page: string;
}) => {
  return (
    <div className="relative overflow-hidden container">
      <img
        src="/images/miniture/page_header.jpeg"
        alt="page header"
        className="w-full rounded-2xl h-[170px] md:h-full"
      />
      <div className="absolute top-1/2 left-28 flex items-center gap-3 text-gray-700 font-semibold text-lg">
        <Link
          to="/"
          className="cursor-pointer hover:text-secondary hover:duration-300"
        >
          {homePage}
        </Link>
        <span>/</span>
        <h2 className="cursor-pointer hover:text-secondary hover:duration-300">
          {page}
        </h2>
      </div>
    </div>
  );
};

export default PageHeading;
