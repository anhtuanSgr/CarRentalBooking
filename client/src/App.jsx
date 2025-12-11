import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <div>
      {!isOwnerPath && <Navbar onShowLogin={setShowLogin} />}
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<Home />} />
        {/* Trang chi tiết xe với tham số id */}
        <Route path="/car-details/:id" element={<CarDetails />} />
        {/* Trang danh sách xe */}
        <Route path="/cars" element={<Cars />} />
        {/* Trang đặt chỗ của tôi */}
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </div>
  );
}

export default App;
