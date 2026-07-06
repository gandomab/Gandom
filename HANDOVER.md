# Project Handover & Transition Document

Gandom Web Site Design & Integration

---

## 🚦 Current Project Status

- **Frontend UI (100% Completed)**: The visual layout is fully implemented and conforms strictly to the Figma design specs. This includes responsive scaling, customized micro-animations, and input styles for all key pages (with the exclusion of the legal terms & conditions pages).
- **Backend Staging Integration (100% Completed & Tested)**: The application successfully communicates with the staging backend. Asynchronous forms, state constraints, cart checkout data mapping, delivery slots, and Stripe payments are fully integrated and verified via staging API endpoints.

---

## 🌿 Branch Strategy & Architecture

The repository is structured across two primary branches to separate mockup designs from active staging environments:

### 1. **`master` Branch (Production Staging / Mocked)**
This branch hosts the static frontend UI demonstration and runs entirely offline without API dependencies.
- **Data Flow**: Powered by static JSON files located in [src/data/](file:///c:/Repositories/Gandom/src/data).
- **Cart Management**: State is handled locally by [CartContext.jsx](file:///c:/Repositories/Gandom/src/contexts/CartContext.jsx).
- **Authentication Flow**: Managed using a simulated user session context (`UserContextSimulate.jsx` / `UserContext.jsx`) that mocks logins, address defaults, and guest checkout pipelines. This allowed designing page layouts and testing user journeys before backend availability.

### 2. **`development` Branch (Integration)**
This branch connects to live staging endpoints for integrated pipeline verification.
- **Data Flow**: Connects to the Azure staging backend using the Axios client base configuration in [src/services/api.js](file:///c:/Repositories/Gandom/src/services/api.js).
- **Context Update**: The simulated authentication context has been transitioned into the fully functional [UserContext.jsx](file:///c:/Repositories/Gandom/src/contexts/UserContext.jsx) to make live HTTP requests for login/registration JWTs, addresses, and order submissions.

---

#### Tasks To Do
1. **Legal Pages**: The placeholders for terms, conditions, privacy policy, and user agreement pages are not yet implemented.
2. **Production Transition**: The API endpoint is currently pointing to staging. Change it to production.

---

#### Product Detail Page for Fermented Vegetables
In [ProductDetailPage.jsx](file:///c:/Repositories/Gandom/src/pages/ProductDetailPage/page.jsx), rendering the specific layout for the "Fermented Vegetables" product uses a hardcoded ID check:

```javascript
{product?.id === 403 && (
    <CustomFermentedVegetablesDetails productdish={product} />
)}
```

### Context:
- **Why this was done**: This page required custom UI input selectors and layout properties different from the standard dish details. Since the backend databases were still in progress, checking for mock ID `403` from `productData.js` was the most straightforward way to implement this specific view.
- **The Issue**: Once connected to the production database, the product's database-assigned primary key/ID might not be `403`. Keeping this hardcoded ID check will break this custom page layout.

---

## 📋 Next Steps Action Plan 

### Task 1: Complete Legal Pages
- Consult Figma files for copy and style structures.
- Create new page components inside [src/pages/](file:///c:/Repositories/Gandom/src/pages).
- Register the routes inside [App.jsx](file:///c:/Repositories/Gandom/src/App.jsx).

### Task 2: Refactor the Fermented Vegetable Layout Trigger
- Replace the hardcoded ID `403` check in [ProductDetailPage.jsx:L70](file:///c:/Repositories/Gandom/src/pages/ProductDetailPage/page.jsx#L70) with a dynamic indicator.
- **Recommended Approaches**:
  1. Trigger layout based on product slug (e.g., `product?.slug === "custom-fermented-vegetables"`).
  2. Map an attribute on the backend API payload (e.g., `product?.is_customizable === true`).

### Task 3: Switch Base URL to Production Backend
- Once the production API credentials and endpoint URLs are ready:
  1. Configure Vite environment variables (see [CONTRIBUTING.md](file:///c:/Repositories/Gandom/CONTRIBUTING.md)).
  2. Update the fallback `baseURL` in [api.js](file:///c:/Repositories/Gandom/src/services/api.js) to connect to the live production site.
