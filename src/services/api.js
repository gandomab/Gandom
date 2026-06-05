import axios from "axios";

const api = axios.create({
    baseURL: "https://gandom-backend-staging-ceczf2h4bac5eufa.swedencentral-01.azurewebsites.net",
    headers: {
        "Content-Type": "application/json",
    },
});

// products and categories service api
export const productService = {
    // 1. Gets the flat array of ALL products (Used on ProductsPage)
    getAll: async () => {
        const response = await api.get("/api/products/");
        return response.data;
    },

    // 2. Gets ALL the details for a SINGLE product (Used on Detail Page)
    // You can use 'id' or 'slug' here, depending on how your Django URL is set up.
    // Assuming your URL looks like: /api/products/spicy-ramen/
    getBySlug: async (slug) => {
        const response = await api.get(`/api/products/${slug}/`);
        return response.data;
    }
};


export default api;