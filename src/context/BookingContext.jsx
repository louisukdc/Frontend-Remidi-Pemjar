// context/BookingContext.js
import { createContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState(null);

    return (
        <BookingContext.Provider
            value={{
                selectedService,
                setSelectedService,
                selectedSchedule,
                setSelectedSchedule,
                paymentDetails,
                setPaymentDetails,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export default BookingContext;
