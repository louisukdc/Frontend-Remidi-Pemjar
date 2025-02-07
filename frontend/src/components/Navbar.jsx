// Navbar.js
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Barbershop Booking</h1>
      <button className="bg-red-500 px-3 py-1 rounded">Logout</button>
    </nav>
  );
};

export default Navbar;