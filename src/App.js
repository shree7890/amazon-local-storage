import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Navbar from "./components/Navbar/Navbar";
import OrderReview from "./components/OrderReview/OrderReview";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order" element={<OrderReview />} />
          <Route path="inventory" element={<Inventory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
