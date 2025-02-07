// pages/Booking.js
import React, { useState } from "react";
import ServiceCard from "../components/servicecard";
import ScheduleCard from "../components/schedulecard";


const Booking = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedSchedule, setSelectedSchedule] = useState(null);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Booking</h1>
            <ServiceCard onSelect={setSelectedService} />
            {selectedService && <ScheduleCard onSelect={setSelectedSchedule} />}
        </div>
    );
};

export default Booking;