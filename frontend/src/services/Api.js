// services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3307"; // Ganti dengan URL backend jika berbeda

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Auth Services
export const login = async(credentials) => {
    return await api.post("/auth/login", credentials);
};

export const register = async(userData) => {
    return await api.post("/auth/register", userData);
};

// Booking Services
export const fetchServices = async() => {
    return await api.get("/service");
};

export const fetchSchedules = async(serviceId) => {
    return await api.get(`/schedule?serviceId=${serviceId}`);
};

export const createBooking = async(bookingData) => {
    return await api.post("/booking", bookingData);
};

// Payment Services
export const processPayment = async(paymentData) => {
    return await api.post("/payment", paymentData);
};

export default api;