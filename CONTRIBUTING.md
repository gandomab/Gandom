# Gandom Frontend Contribution Guide

This document outlines the guidelines, environment setups, branching strategies, and standards for contributing to the Gandom frontend codebase.

---

## 1. Branching & Data Flow Strategy

Gandom utilizes a dual-data strategy depending on the repository branch:

- **`development` Branch**: Fully integrated with the live backend staging environment. Network calls hit the Azure-hosted staging service.
- **`master` Branch (Production)**: Operates using local mocked data representations. This minimizes production API dependencies before final launch.

### Environment Variable Integration
To dictate data flow dynamically without code modification, Vite environment variables are recommended. By adding `.env` files, the application can switch base URLs or toggles:

1. Create a `.env.development` file:
   ```env
   VITE_API_URL=https://gandom-backend-staging-ceczf2h4bac5eufa.swedencentral-01.azurewebsites.net
   VITE_USE_MOCK_DATA=false
   ```
2. Create a `.env.production` file (for master branch):
   ```env
   VITE_API_URL=http://localhost:5000 # Or local mock server
   VITE_USE_MOCK_DATA=true
   ```

Within [src/services/api.js](file:///c:/Repositories/Gandom/src/services/api.js), the configuration uses the values defined in the environment variables:
```javascript
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://gandom-backend-staging-ceczf2h4bac5eufa.swedencentral-01.azurewebsites.net",
    headers: {
        "Content-Type": "application/json",
    },
});
```

---

## 2. Local Setup & Installation

Follow these steps to run the application on your local machine:

### Prerequisites
- **Node.js**: Version 18.x or 20.x LTS (Recommended).
- **npm**: Version 9.x or higher.

### Step 1: Install Dependencies
Navigate to the project root directory and install packages:
```bash
npm install
```

### Step 2: Running the Development Server
Start the Vite local development server:
```bash
npm run dev
```
By default, this launches the application on: `http://localhost:5173/`

### Step 3: Run Linter Checks
Always run ESLint before submitting a pull request to ensure style compliance:
```bash
npm run lint
```

### Step 4: Build & Preview Production Bundle
To build the application for deployment (enabling the React Compiler optimization steps):
```bash
npm run build
npm run preview
```

---

## 3. Transitioning Production Branch Away From Mock Data

To transition the production environment from mock data towards the live production backend:
1. Locate the service connectors in [src/services/api.js](file:///c:/Repositories/Gandom/src/services/api.js).
2. Provide the production backend API URL in the environment configuration `.env.production`:
   ```env
   VITE_API_URL=https://gandom-backend-production-url.net
   VITE_USE_MOCK_DATA=false
   ```

---

## 4. Introducing New Endpoints

All new API methods **must** be introduced through the central service layer. Follow this flow:

1. Open [src/services/api.js](file:///c:/Repositories/Gandom/src/services/api.js).
2. If the API requires authentication, verify it is not matched by the public endpoint list in the request interceptor. This ensures the JWT bearer header is automatically injected.
3. Map the endpoint onto the respective service object. For example:
   ```javascript
   export const productServices = {
       // Existing methods...
       
       getNewCategory: async (categorySlug) => {
           const response = await api.get(`/api/products/category/${categorySlug}/`);
           return response.data;
       }
   };
   ```

---


