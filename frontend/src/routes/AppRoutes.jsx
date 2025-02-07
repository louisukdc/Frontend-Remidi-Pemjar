// routes/AppRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Booking from "../pages/booking";
import Payment from "../pages/payment";
import Confirmation from "../pages/Confirmation";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
