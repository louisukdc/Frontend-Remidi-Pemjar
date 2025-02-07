import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/navbar";
import AppRoutes from "./routes/AppRoutes";
import ContextProvider from "./context/ContextProvider";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";

// Custom hook untuk Auth
export const useAuth = () => useContext(AuthContext);

function App() {
  return (
    <Router>
      <ContextProvider>
        <MainLayout />
      </ContextProvider>
    </Router>
  );
}

function MainLayout() {
  const { user } = useAuth();

  return (
    <div className="flex">
      {user && <Sidebar />}
      <div className="flex-1 p-4">
        <Navbar />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
