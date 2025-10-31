# 🛒 Trendify - Full-Stack MERN E-Commerce Platform

<div align="center">
  
![GitHub last commit](https://img.shields.io/github/last-commit/MenathNDGD/MERN-Ecommerce)
![GitHub repo size](https://img.shields.io/github/repo-size/MenathNDGD/MERN-Ecommerce)
![GitHub stars](https://img.shields.io/github/stars/MenathNDGD/MERN-Ecommerce?style=social)
![GitHub forks](https://img.shields.io/github/forks/MenathNDGD/MERN-Ecommerce?style=social)

</div>

<div align="center">
  <img src="frontend/src/assets/logo.png" alt="Trendify Logo" width="200"/>
</div>

<p align="center">A modern, responsive, and feature-rich e-commerce platform built with the MERN stack.</p>

---

## 📷 Preview

<div align="center">
  <img src="frontend/src/assets/hero_img.png" alt="Frontend Preview" width="45%"/>
  <img src="admin/src/assets/logo.png" alt="Admin Dashboard" width="45%"/>
  <p><em>Customer Frontend & Admin Dashboard Interfaces</em></p>
</div>

---

## 🌟 Key Features

### 👥 Customer-Facing Store

| Feature | Description |
|---------|-------------|
| 🔐 **Secure Authentication** | Register, login with email/password or social accounts |
| 🛍️ **Product Catalog** | Browse thousands of products with advanced filtering/sorting |
| 🛒 **Shopping Cart** | Add/remove items, adjust quantities, save for later |
| 💳 **Secure Payments** | Stripe-integrated checkout with multiple payment options |
| 📦 **Order Management** | Track order status, view history, manage returns |
| 🔍 **Smart Search** | Instant search with autocomplete and suggestions |

### ⚙️ Admin Dashboard

| Feature | Description |
|---------|-------------|
| 📊 **Analytics Overview** | Real-time sales data, revenue metrics, customer insights |
| 🛠️ **Product Management** | CRUD operations for products, categories, inventory |
| 📦 **Order Processing** | View, update, and fulfill customer orders |
| 👥 **User Management** | Manage customers, admins, and access permissions |
| 📈 **Sales Reports** | Generate detailed reports on sales performance |
| 🎨 **Customization** | Modify site settings, banners, and promotional content |

---

## 🏗️ System Architecture

<div align="center">

```mermaid
graph TD
    A[Client - Customer] --> B[Frontend - React/Vite]
    C[Client - Admin] --> D[Admin Panel - React/Vite]
    B --> E[Backend API - Express/Node.js]
    D --> E
    E --> F[(Database - MongoDB)]
    E --> G[Cloudinary - Image Storage]
    E --> H[Stripe - Payment Processing]
    
    style A fill:#4CAF50,stroke:#388E3C
    style B fill:#2196F3,stroke:#0D47A1
    style C fill:#4CAF50,stroke:#388E3C
    style D fill:#2196F3,stroke:#0D47A1
    style E fill:#FF9800,stroke:#E65100
    style F fill:#F44336,stroke:#B71C1C
    style G fill:#9C27B0,stroke:#4A148C
    style H fill:#607D8B,stroke:#263238
```

<p><em>High-Level System Architecture</em></p>
</div>

---

## 🧰 Tech Stack

<div align="center">

| Layer | Technologies |
|-------|--------------|
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) |
| **Services** | ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white) ![Cloudinary](https://img.shields.io/badge/Cloudinary-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) |

</div>

---

## 🗂️ Project Structure

| Directory | Purpose |
|-----------|---------|
| [/admin](admin/) | Admin dashboard panel (React/Vite) |
| [/backend](backend/) | RESTful API server (Node.js/Express) |
| [/frontend](frontend/) | Customer-facing storefront (React/Vite) |
| [.env](.env) | Environment variables configuration |
| [README.md](README.md) | Project documentation |

### Backend Structure

```
/backend/
├── config/           # Database and cloud service configurations
├── controllers/      # Request handlers and business logic
├── middleware/       # Authentication and request processing
├── models/           # MongoDB data models
├── routes/           # API endpoint definitions
├── server.js         # Application entry point
└── .env              # Environment variables
```

### Frontend Structure

```
/frontend/
├── src/
│   ├── assets/       # Images, icons, and static files
│   ├── components/   # Reusable UI components
│   ├── context/      # React context providers
│   ├── pages/        # Page components
│   ├── App.jsx       # Main application component
│   └── main.jsx      # Entry point
├── public/           # Static assets
└── .env              # Environment variables
```

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- [MongoDB](https://www.mongodb.com/) account or local instance

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/MenathNDGD/MERN-Ecommerce.git
   cd MERN-Ecommerce
   ```

2. **Install dependencies for all components**
   ```bash
   # Install backend dependencies
   cd backend && npm install
   
   # Install frontend dependencies
   cd ../frontend && npm install
   
   # Install admin panel dependencies
   cd ../admin && npm install
   ```

### Environment Configuration

Create `.env` files in each directory with the following variables:

#### Backend Environment Variables (`backend/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://username:password@cluster.mongodb.net/dbname` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789012345` |
| `CLOUDINARY_SECRET_KEY` | Cloudinary secret key | `abcdefghijklmnopqrstuvwxyz123456` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `JWT_SECRET` | Secret for JWT token generation | `your_jwt_secret_key` |
| `ADMIN_EMAIL` | Default admin email | `admin@trendify.com` |
| `ADMIN_PASSWORD` | Default admin password | `admin@123` |
| `PORT` | Server port | `4000` |

#### Frontend & Admin Environment Variables (`frontend/.env` & `admin/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | Backend API URL | `http://localhost:4000` |

### Running the Application

Start each component in separate terminals:

#### Terminal 1: Backend Server
```bash
cd backend
npm run server
# Runs on http://localhost:4000
```

#### Terminal 2: Frontend Store
```bash
cd frontend
npm run dev
# Runs on http://localhost:5173
```

#### Terminal 3: Admin Dashboard
```bash
cd admin
npm run dev
# Runs on http://localhost:5174
```

---

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/user/register` | Register new user |
| `POST` | `/api/user/login` | User login |
| `GET` | `/api/product/list` | Get all products |
| `POST` | `/api/cart/add` | Add item to cart |
| `POST` | `/api/order/place` | Place new order |
| `GET` | `/api/order/list` | Get user orders |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/) - Frontend library
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [MongoDB](https://www.mongodb.com/) - Database solution
- [Stripe](https://stripe.com/) - Payment processing
- [Cloudinary](https://cloudinary.com/) - Image management