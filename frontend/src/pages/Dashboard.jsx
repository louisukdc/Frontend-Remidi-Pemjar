// pages/Dashboard.js
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <Navbar />
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
