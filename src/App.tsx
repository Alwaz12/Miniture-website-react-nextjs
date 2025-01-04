import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Toaster } from "react-hot-toast";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder
        toastOptions={{ duration: 2000 }}
      />
    </div>
  );
};

export default App;
