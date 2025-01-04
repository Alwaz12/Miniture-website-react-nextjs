import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Icon = () => {
  return (
    <div>
      <div className="flex">
        <span className="text-gray-300 text-xl mr-6">
          <FaFacebook />
        </span>
        <span className="text-gray-300 text-xl mr-6">
          <FaLinkedin />
        </span>
        <span className="text-gray-300 text-xl mr-6">
          <FaYoutube />
        </span>
        <span className="text-gray-300 text-xl mr-6">
          <FaInstagram />
        </span>
      </div>
    </div>
  );
};

export default Icon;
