# Gandom Frontend Architecture

This document provides a comprehensive overview of the architecture, tech stack, directory structure, state management, and patterns of the Gandom frontend web application.

---

## 1. Project Overview

**Gandom** It enables users to browse menus (soups, desserts, waffles, side dishes), customize products (e.g., adding lactose-free or vegan options), select delivery dates and times, manage carts, authentication (via JWT login/registration), manage saved shipping addresses, and complete transactions using Stripe.

---

## 2. Tech Stack & Dependencies

The project uses the following technology stack:

- **Framework Core**: [React 19.1](file:///c:/Repositories/Gandom/package.json) & [Vite 7.1](file:///c:/Repositories/Gandom/package.json).
- **React Compiler**: Enabled via `babel-plugin-react-compiler` inside [vite.config.js](file:///c:/Repositories/Gandom/vite.config.js) to improve performance by automatically memoizing values.
- **Styling**: Vanilla CSS combined with [TailwindCSS 3.4](file:///c:/Repositories/Gandom/tailwind.config.js) and Autoprefixer for custom fonts, animations, and layouts.
- **HTTP Client**: [Axios 1.17](file:///c:/Repositories/Gandom/package.json) for network requests, interceptors, and error handling.
- **Routing**: `react-router-dom` (v7.9) for SPA routing and `react-router-hash-link` (v2.4) to handle anchor scrolling to dynamic menu categories.
- **Payment Processing**: `@stripe/react-stripe-js` (v6.3) and `@stripe/stripe-js` (v9.5) for rendering the secure checkout payment form (Stripe Payment Element).
- **Linting & Code Quality**: ESLint 9.36 with custom rules.

---

## 3. Styling & Typography Design System

The application styling is declared in [tailwind.config.js](file:///c:/Repositories/Gandom/tailwind.config.js) and injected via [index.css](file:///c:/Repositories/Gandom/src/index.css):


### Micro-Animations
- **Infinite Marquee**: Customized CSS keyframes in Tailwind (`marquee` animation) for sliding promotional elements.

---

## 4. Directory Structure

Below is the directory view mapping of Gandom's frontend project tree:

```
c:\Repositories\Gandom\
├── .github/
│   └── instructions.md   
├── public/
│   └── vite.svg                   # Static public assets
├── src/
│   ├── assets/                    # Static images, icons, and local font files
│   ├── components/                # Reusable UI/feature-specific components
│   ├── contexts/                  # React Contexts for global state management
│   ├── data/                      # Client-side fallback/mock data JS configurations
│   ├── pages/                     # Routed page container views
│   ├── services/                  # Business logic services & API connectors
│   ├── App.css                    # Component specific styles
│   ├── App.jsx                    # Core application wrapper & route switcher
│   ├── index.css                  # Global tailwind configuration & local @font-face rules
│   └── main.jsx                   # Application DOM entry-point wrapper
├── eslint.config.js               # ESLint configuration
├── tailwind.config.js             # Tailwind spacing, colors, animations & fonts
└── vite.config.js                 # Vite plugins and compilation configs
```

### Pages Map ([src/pages/](file:///c:/Repositories/Gandom/src/pages))
The primary application views are organized as folders inside `src/pages/`:
1. [AboutUs](file:///c:/Repositories/Gandom/src/pages/AboutUs): The "About Gandom" section layout.
2. [AddressPage](file:///c:/Repositories/Gandom/src/pages/AddressPage): Form for specifying shipping information and default profile addresses.
3. [EventsPage](file:///c:/Repositories/Gandom/src/pages/EventsPage): Details on local events and table reservation notices.
4. [GymPage](file:///c:/Repositories/Gandom/src/pages/GymPage): Healthy plan items and special packages targeting active clients.
5. [LoginPage](file:///c:/Repositories/Gandom/src/pages/LoginPage): Authentication sign-in forms.
6. [Pay](file:///c:/Repositories/Gandom/src/pages/Pay): Checkout layout embedding the Stripe payment UI.
7. [PaymentSuccess](file:///c:/Repositories/Gandom/src/pages/PaymentSuccess): Order receipt and transaction status.
8. [ProductDetailPage](file:///c:/Repositories/Gandom/src/pages/ProductDetailPage): Detail cards and custom select options for a single dish.
9. [ProductsPage](file:///c:/Repositories/Gandom/src/pages/ProductsPage): Main menu categorized listing.
10. [RegisterPage](file:///c:/Repositories/Gandom/src/pages/RegisterPage): New user account registrations.
11. [YourCart](file:///c:/Repositories/Gandom/src/pages/YourCart): Summary checkout list with date & delivery slot selection.

---

## 5. State Management

The frontend state is managed via native React Context APIs found in [src/contexts/](file:///c:/Repositories/Gandom/src/contexts/):

1. **[CartContext.jsx](file:///c:/Repositories/Gandom/src/contexts/CartContext.jsx)**:
   - Tracks items added to the cart, quantities, and chosen option variations.
   - Calculates dynamic subtotals.
   - Restricts adding quantities that exceed the backend `stock_quantity`.
   - Enforces a flat delivery fee of 30.00 SEK when items are present.
   - Persists state inside `localStorage` for cart recovery.

2. **[UserContext.jsx](file:///c:/Repositories/Gandom/src/contexts/UserContext.jsx)**:
   - Manages user sessions, authentication profiles, and login status.
   - Integrates login, sign-out, and registration actions.
   - Distinguishes checkout flow variables between logged-in users and guest states.
   - Saves JWT access tokens and refresh tokens to local storage.

---

## 6. Service Layer & API Interceptors

Network API communication is encapsulated within [src/services/api.js](file:///c:/Repositories/Gandom/src/services/api.js):

### Axios Client configuration
The client sets up interceptors to manage backend validation cleanly:
- **Request Interceptor**: Extracts the `accessToken` JWT from localStorage and attaches it via the `Authorization: Bearer <token>` header. It automatically skips this step for public endpoints like `/api/products/` and `/api/delivery/slots/` to prevent stale tokens from blocking queries.
- **Response Interceptor**: Intercepts `401 Unauthorized` and `403 Forbidden` response statuses to clear localStorage credentials (e.g. accessToken, refreshToken, userProfile, isGuest) and redirect the browser back to `/login`.

### Service Mappers
All backend services are mapped to semantic objects:
- `productService`: Load all items or load detailed product slugs.
- `authService`: Handle account registration and login calls.
- `addressService`: Retreive or patch default shipping addresses.
- `orderService`: Packaging options, custom fields, and slot dates to construct the backend order.
- `paymentService`: Request Stripe transaction intents.
- `deliveryService`: Fetch dynamic list of available/active time slots for a specific date.
