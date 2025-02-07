import { AuthProvider } from "./AuthContext";
import { BookingProvider } from "./BookingContext";

const ContextProvider = ({ children }) => {
    return (
        <AuthProvider>
            <BookingProvider>{children}</BookingProvider>
        </AuthProvider>
    );
};

export default ContextProvider;
