import axios from "axios";

const api = axios.create({
    baseURL: "https://gandom-backend-staging-ceczf2h4bac5eufa.swedencentral-01.azurewebsites.net",
    headers: {
        "Content-Type": "application/json",
    },
});

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

export default api;