import { createContext, useContext, useState } from 'react';
import { authService } from '../services/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Initialize user and guest state from localStorage for persistence
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("userProfile");
        try {
            return savedUser ? JSON.parse(savedUser) : null;
        } catch (e) {
            return null;
        }
    });

    const [isGuest, setIsGuestState] = useState(() => {
        return localStorage.getItem("isGuest") === "true";
    });

    const [address, setAddress] = useState(null);

    const setIsGuest = (val) => {
        setIsGuestState(val);
        localStorage.setItem("isGuest", val ? "true" : "false");
        if (val) {
            // If continuing as guest, clear any logged in user
            setUser(null);
            localStorage.removeItem("userProfile");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        }
    };

    const login = async (email, password) => {
        const data = await authService.login(email, password);
        // Save access & refresh tokens to localStorage
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("userProfile", JSON.stringify(data.user));
        setUser(data.user);
        setIsGuestState(false);
        localStorage.setItem("isGuest", "false");
        return data;
    };

    const register = async (userData) => {
        return await authService.register(userData);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userProfile");
        localStorage.removeItem("isGuest");
        setUser(null);
        setIsGuestState(false);
        setAddress(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, isGuest, setIsGuest, login, register, address, setAddress, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);