// this is a temporary file to simulate the user context
// this file will be removed or updated when connected to the backend

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // null = Guest, {id: 1...} = Logged In
    const [isGuest, setIsGuest] = useState(false);
    const [address, setAddress] = useState(null);

    const login = (email) => {
        // Simulate finding a user with a saved address
        setUser({ email, hasSavedAddress: true });
    };

    const register = (data) => {
        setUser({ ...data, hasSavedAddress: false });
    };

    return (
        <UserContext.Provider value={{ user, isGuest, setIsGuest, login, register, address, setAddress }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);