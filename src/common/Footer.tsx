import { footer } from "../data/Data";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {footer.map((item) => (
          <div key={item.id} className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {item.header}
            </h3>
            <ul className="flex flex-col gap-3">
              {item.content.map((content) => (
                <li
                  key={content}
                  className="text-primary max-w-[300px] hover:text-white hover:duration-200 cursor-pointer hover:pl-2"
                >
                  {content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
