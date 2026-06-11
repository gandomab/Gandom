import axios from "axios";

const api = axios.create({
    baseURL: "https://gandom-backend-staging-ceczf2h4bac5eufa.swedencentral-01.azurewebsites.net",
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor to dynamically inject the JWT access token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        const isPublicEndpoint = 
            config.url && (
                config.url.includes("/api/products/") || 
                config.url.includes("/api/delivery/slots/") ||
                config.url.includes("/api/accounts/login/") ||
                config.url.includes("/api/accounts/register/")
            );

        if (token && !isPublicEndpoint) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to clear credentials on unauthorized/forbidden errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            // Expired or invalid token detected - clear credentials
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userProfile');
            localStorage.removeItem('isGuest');
            
            // Redirect to login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// products and categories service api
export const productService = {

    getAll: async () => {
        const response = await api.get("/api/products/");
        return response.data;
    },

    getBySlug: async (slug) => {
        const response = await api.get(`/api/products/${slug}/`);
        return response.data;
    }
};

// delivery slots service api
export const deliveryService = {
    getSlots: async (date) => {
        const response = await api.get(`/api/delivery/slots/?date=${date}`);
        return response.data;
    }
};

// Authentication service api
export const authService = {
    login: async (email, password) => {
        const response = await api.post("/api/accounts/login/", { email, password });
        return response.data;
    },
    register: async (userData) => {
        const response = await api.post("/api/accounts/register/", userData);
        return response.data;
    }
};

// Saved address service api
export const addressService = {
    getSavedAddress: async () => {
        const response = await api.get("/api/accounts/address/");
        return response.data;
    },
    updateSavedAddress: async (addressData) => {
        const response2 = await api.patch("/api/accounts/address/", addressData);
        return response2.data;
    }
};

// Order management service api
export const orderService = {
    createOrder: async (orderData) => {
        const response = await api.post("/api/orders/create/", orderData);
        return response.data;
    }
};

export default api;