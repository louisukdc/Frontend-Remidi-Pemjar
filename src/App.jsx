import { BrowserRouter as Router } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar";
import AppRoutes from "./routes/AppRoutes";

// Context untuk autentikasi
const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="flex">
          {user ? <Sidebar /> : null} {/* Pastikan user tidak null sebelum menampilkan Sidebar */}
          <div className="flex-1 p-4">
            <Navbar />
            <AppRoutes /> {/* Menggunakan AppRoutes untuk mengelola semua Routes */}
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
