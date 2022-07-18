import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
