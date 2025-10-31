# ⚙️ Backend API - Trendify E-Commerce

<div align="center">
  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![License](https://img.shields.io/github/license/MenathNDGD/MERN-Ecommerce)

</div>

<div align="center">
  <img src="../frontend/src/assets/logo.png" alt="Trendify Backend" width="200"/>
</div>

<p align="center">RESTful API server for the Trendify e-commerce platform built with Node.js, Express, and MongoDB.</p>

---

## 📋 Overview

The Backend API serves as the core of the Trendify e-commerce platform, handling all business logic, data persistence, and external service integrations. It provides secure authentication, product management, order processing, and payment handling.

<div align="center">
  <img src="../frontend/src/assets/about_img.png" alt="Backend Architecture" width="70%"/>
</div>

---

## 🏗️ Architecture

### System Components

```mermaid
graph TD
    A[Client Applications] --> B[Express.js Server]
    B --> C[Middleware Layer]
    C --> D[Route Handlers]
    D --> E[Controllers]
    E --> F[Models]
    E --> G[External Services]
    F --> H[(MongoDB)]
    G --> I[Cloudinary]
    G --> J[Stripe]
    
    style A fill:#4CAF50,stroke:#2E7D32
    style B fill:#2196F3,stroke:#0D47A1
    style C fill:#FF9800,stroke:#E65100
    style D fill:#FF9800,stroke:#E65100
    style E fill:#9C27B0,stroke:#6A1B9A
    style F fill:#F44336,stroke:#B71C1C
    style G fill:#9E9E9E,stroke:#424242
    style H fill:#795548,stroke:#3E2723
    style I fill:#03A9F4,stroke:#01579B
    style J fill:#607D8B,stroke:#263238
```

### Data Flow

```mermaid
sequenceDiagram
    participant Client
    participant Server
    participant Middleware
    participant Controller
    participant Model
    participant Database
    participant Services
    
    Client->>Server: HTTP Request
    Server->>Middleware: Auth & Validation
    Middleware->>Controller: Processed Request
    Controller->>Model: Data Operations
    Model->>Database: Database Query
    Database-->>Model: Query Results
    Model-->>Controller: Processed Data
    Controller->>Services: External API Calls
    Services-->>Controller: Service Responses
    Controller-->>Server: Response Data
    Server-->>Client: HTTP Response
```

---

## 🔐 Authentication Flow

```mermaid
flowchart TD
    A[User Login Request] --> B[Validate Credentials]
    B --> C{Valid?}
    C -->|Yes| D[Generate JWT Token]
    D --> E[Return Token to Client]
    C -->|No| F[Return Error]
    E --> G[Authenticated Requests]
    G --> H[Verify JWT Token]
    H --> I{Valid Token?}
    I -->|Yes| J[Process Request]
    I -->|No| K[Return 401 Unauthorized]
```

---

## 🚀 Key Features

### 🔐 Security
- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: bcrypt hashing for user passwords
- **Input Validation**: Sanitization and validation of all inputs
- **CORS Protection**: Controlled cross-origin resource sharing

### 🛒 E-Commerce Functionality
- **Product Management**: CRUD operations for products
- **Shopping Cart**: Persistent cart management
- **Order Processing**: Complete order lifecycle management
- **User Management**: Registration, authentication, and profiles

### ☁️ External Integrations
- **Cloudinary**: Image storage and management
- **Stripe**: Payment processing
- **MongoDB Atlas**: Cloud database hosting

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web framework for RESTful APIs |
| **MongoDB** | NoSQL database for data storage |
| **Mongoose** | ODM for MongoDB interactions |
| **JWT** | Token-based authentication |
| **Bcrypt** | Password hashing |
| **Cloudinary** | Image management service |
| **Stripe** | Payment processing |
| **Multer** | File upload handling |
| **Cors** | Cross-origin resource sharing |

---

## 📁 Project Structure

```
backend/
├── config/              # Configuration files
│   ├── cloudinary.js    # Cloudinary setup
│   └── mongodb.js       # MongoDB connection
├── controllers/         # Business logic
│   ├── cartController.js
│   ├── orderController.js
│   ├── productController.js
│   └── userController.js
├── middleware/          # Request processing
│   ├── adminAuth.js
│   ├── auth.js
│   └── multer.js
├── models/              # Database models
│   ├── orderModel.js
│   ├── productModel.js
│   └── userModel.js
├── routes/              # API endpoints
│   ├── cartRoute.js
│   ├── orderRoute.js
│   ├── productRoute.js
│   └── userRoute.js
├── server.js            # Application entry point
├── package.json         # Dependencies and scripts
└── .env                 # Environment variables
```

---

## ▶️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database (local or Atlas)
- Cloudinary account
- Stripe account

### Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

### Development

```bash
# Start development server with nodemon
npm run server
# Runs on http://localhost:4000
```

### Production

```bash
# Start production server
npm start
```

---

## 🌐 Environment Variables

Create a `.env` file in the backend directory:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `4000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789012345` |
| `CLOUDINARY_SECRET_KEY` | Cloudinary secret key | `abcdefghijklmnopqrstuvwxyz` |
| `JWT_SECRET` | Secret for JWT token generation | `your_jwt_secret` |
| `ADMIN_EMAIL` | Default admin email | `admin@trendify.com` |
| `ADMIN_PASSWORD` | Default admin password | `admin@123` |

---

## 🔄 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/user/register` | Register new user |
| `POST` | `/api/user/login` | User login |
| `POST` | `/api/user/admin` | Admin login |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/product/add` | Add new product |
| `GET` | `/api/product/list` | Get all products |
| `POST` | `/api/product/remove` | Remove product |
| `POST` | `/api/product/single` | Get single product |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/cart/add` | Add item to cart |
| `POST` | `/api/cart/remove` | Remove item from cart |
| `POST` | `/api/cart/get` | Get user cart |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/order/place` | Place new order |
| `POST` | `/api/order/list` | Get user orders |
| `POST` | `/api/order/admin` | Get all orders (admin) |
| `POST` | `/api/order/status` | Update order status |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.