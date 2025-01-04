import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
} from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="mr-4 text-secondary text-xl" />
              <span>support@moderncommerce.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-4 text-secondary text-xl" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-4 text-secondary text-xl" />
              <span>123 E-commerce Street, Tech City, Digital State 12345</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-3 py-2 border rounded-md 
                  'border-red-500' : 'border-gray-300'
                `}
              />            
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border rounded-md 
                 'border-gray-300'
                `}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`w-full px-3 py-2 border rounded-md 
                  border-gray-300'
                `}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}

                className={`w-full px-3 py-2 border rounded-md border-gray-300`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 rounded-md hover:bg-secondary transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
