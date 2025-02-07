// Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Barbershop</h2>
      <ul>
        <li className="mb-2"><Link to="/dashboard">Dashboard</Link></li>
        <li className="mb-2"><Link to="/booking">Booking</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;