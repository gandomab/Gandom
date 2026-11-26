# Gandom - Premium Food Delivery & Restaurant Frontend

Gandom is a high-performance, responsive React web application built as the frontend of a premium food delivery service website. It interfaces with an Azure-hosted Django backend to offer a complete restaurant menu browsing, ordering, and checkout experience.

---

## 📖 Table of Contents

- [Project Overview](#-project-overview)
- [Documentation Index](#-documentation-index)
- [Quick Start Guide](#-quick-start-guide)
- [Core Technology Stack](#-core-technology-stack)
- [Directory Layout Summary](#-directory-layout-summary)
- [Branching & Data Flow Overview](#-branching--data-flow-overview)

---

## 🌟 Project Overview

Gandom delivers a seamless user experience, featuring:
- **Responsive Menu Explorer**: Section navigation for Soups, Desserts, Waffles, and Side Dishes with custom variation options.
- **Dynamic Delivery Slots**: Live date and time-slot availability querying.
- **Cart & Authentication Contexts**: Real-time stock status constraints, guest state operations, and JWT user profiles.
- **Stripe Checkout**: Integrated Payment Element.

---

## 📄 Documentation Index

For in-depth guides, please refer to the following local markdown files:
- **[ARCHITECTURE.md](file:///c:/Repositories/Gandom/ARCHITECTURE.md)**: Details the codebase folder structures, component structure, global CSS custom fonts/colors config, React Context state management, and the Axios service interceptors.
- **[CONTRIBUTING.md](file:///c:/Repositories/Gandom/CONTRIBUTING.md)**: Outlines branching models (Development with Live API vs. Master with mock data), local installation guides, endpoint creation recipes, and coding standards.

---

## ⚡ Quick Start Guide

### Prerequisites
- Node.js version 18.x or 20.x LTS.
- npm version 9.x+.

### Installation
1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

---

## 🛠️ Core Technology Stack

- **Framework**: React 19.1 & Vite 7.1
- **State Management**: React Context API
- **HTTP Client**: Axios 1.17 (with request JWT authorization and response interceptors)
- **Styling**: TailwindCSS 3.4 & Vanilla CSS
- **Router**: React Router DOM 7.9 & React Router Hash Link 2.4
- **Payments**: Stripe Elements SDK

For complete dependency versions, check the [package.json](file:///c:/Repositories/Gandom/package.json).

---

## 📁 Directory Layout Summary

Here is a high-level view of Gandom's files:
* **[src/assets/](file:///c:/Repositories/Gandom/src/assets)**: Images, logos, and local fonts.
* **[src/components/](file:///c:/Repositories/Gandom/src/components)**: Small, modular UI components (e.g. Header, Navbar, Stripe wrapper, ProductCard).
* **[src/contexts/](file:///c:/Repositories/Gandom/src/contexts)**: Global contexts for Carts and Users.
* **[src/data/](file:///c:/Repositories/Gandom/src/data)**: Static mock and category files.
* **[src/pages/](file:///c:/Repositories/Gandom/src/pages)**: Main routed layout views (e.g., ProductsPage, AddressPage, Pay, YourCart).
* **[src/services/api.js](file:///c:/Repositories/Gandom/src/services/api.js)**: Centralized Axios API instances.

---

## 🌿 Branching & Data Flow Overview

- **Development Branch**: Runs live database transactions. Connects directly to the Azure backend staging endpoint.
- **Master Branch**: Runs on local mock representations (found in [src/data/](file:///c:/Repositories/Gandom/src/data)) for sandboxed production staging.
- **Toggle Environment Variables**: Environment settings can be governed using custom `.env` configurations. Refer to [CONTRIBUTING.md](file:///c:/Repositories/Gandom/CONTRIBUTING.md) for variable names and instructions.
