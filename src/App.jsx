import Navbar from "./components/Navbar";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
