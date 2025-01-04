import React from 'react';
import { 
  FaShoppingCart, 
  FaHeart, 
  FaGlobe, 
  FaUsers, 
  FaTrophy, 
  FaLeaf 
} from 'react-icons/fa';

const teamMembers = [
  {
    name: 'David Thompson',
    role: 'Founder & CEO',
    bio: 'Visionary entrepreneur with 15 years of e-commerce experience.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Tech innovator passionate about creating seamless online shopping experiences.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Alex Chen',
    role: 'Head of Customer Experience',
    bio: 'Dedicated to ensuring customer satisfaction and building lasting relationships.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
       {/* Hero Section */}
       <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Revolutionizing Online Shopping</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At Modern E-commerce, we're transforming the digital marketplace by combining 
          cutting-edge technology, carefully curated products, and an unparalleled customer 
          experience. Our mission is to make online shopping seamless, personalized, and 
          genuinely enjoyable for every customer.
        </p>
      </section>

      {/* Mission and Values */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaShoppingCart className="mx-auto text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
          <p className="text-gray-600">
            We curate only the highest quality products from trusted manufacturers.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaHeart className="mx-auto text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Customer First</h3>
          <p className="text-gray-600">
            Your satisfaction is our top priority. We're always here to help.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaGlobe className="mx-auto text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
          <p className="text-gray-600">
            Delivering exceptional products to customers around the world.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <FaUsers className="text-secondary text-3xl mr-4 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2">Community</h4>
              <p className="text-gray-600">
                We believe in building strong, supportive relationships with our customers and team.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaTrophy className="text-secondary text-3xl mr-4 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in every product, service, and interaction.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaLeaf className="text-secondary text-3xl mr-4 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
              <p className="text-gray-600">
                We are committed to environmentally responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-secondary mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
