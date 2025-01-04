import {
  FaCalendar,
  FaUser,
  FaTag,
  FaArrowRight,
  FaFire,
  FaGlobe,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "The Future of E-commerce: Trends to Watch in 2024",
    excerpt:
      "Explore the cutting-edge technologies and consumer trends that are reshaping online shopping experiences.",
    author: "Michael Rodriguez",
    date: "January 15, 2024",
    category: "Technology",
    readTime: "5 min read",
    tags: ["AI", "Innovation", "Trends"],
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Sustainable Shopping: How to Make Eco-Friendly Choices Online",
    excerpt:
      "Discover practical tips for reducing your environmental impact while enjoying a seamless online shopping experience.",
    author: "Alex Chen",
    date: "February 3, 2024",
    category: "Sustainability",
    readTime: "4 min read",
    tags: ["Eco", "Green", "Environment"],
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
  {
    id: 3,
    title: "Personalization in E-commerce: Beyond the Recommendation Algorithm",
    excerpt:
      "Deep dive into how modern e-commerce platforms are creating truly personalized shopping experiences.",
    author: "David Thompson",
    date: "March 20, 2024",
    category: "Customer Experience",
    readTime: "6 min read",
    tags: ["AI", "Personalization", "UX"],
    imageUrl:
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Animated Hero Section */}
      <section className="relative mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-dark opacity-10 transform -skew-y-6"></div>
        <div className="relative text-center py-16 px-4">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 animate-fade-in-up">
            Modern E-commerce Insights
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Dive into the latest trends, innovations, and strategies
            transforming the digital marketplace.
          </p>

          <div className="max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            <div className="pl-4 text-gray-500">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="flex-grow px-4 py-3 focus:outline-none"
            />
            <div className="pr-4 relative group">
              <button className="text-gray-500 hover:text-secondary">
                <FaFilter />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition hover:scale-105">
          <div className="grid md:grid-cols-2">
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: `url(${blogPosts[0].imageUrl})`,
                minHeight: "400px",
              }}
            >
              <div className="h-full bg-black bg-opacity-30 hover:bg-opacity-10 transition duration-300"></div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4 text-gray-600">
                <FaCalendar className="mr-2 text-secondary" />
                <span className="mr-4">{blogPosts[0].date}</span>
                <FaUser className="mr-2 text-secondary" />
                <span>{blogPosts[0].author}</span>
                <span className="ml-4 bg-secondary text-white px-2 py-1 rounded-full text-xs">
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 hover:text-secondary transition">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex space-x-2 mb-6">
                {blogPosts[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center text-secondary hover:text-secondary-dark transition duration-300 group">
                Read More
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center">
          <FaFire className="mr-4 text-secondary" /> Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
            >
              <div
                className="h-56 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${post.imageUrl})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-gray-600 text-sm">
                  <FaCalendar className="mr-2 text-secondary" />
                  <span className="mr-4">{post.date}</span>
                  <FaTag className="mr-2 text-secondary" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-secondary transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center text-secondary hover:text-secondary-dark transition duration-300 group">
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                  </button>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-2xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-pulse">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive insights, trends, and
            strategies delivered straight to your inbox.
          </p>
          <form className="max-w-xl mx-auto flex shadow-2xl">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-4 text-gray-800 rounded-l-full focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="bg-white text-secondary px-8 py-4 rounded-r-full hover:bg-gray-100 transition duration-300 flex items-center"
            >
              Subscribe <FaGlobe className="ml-2" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
