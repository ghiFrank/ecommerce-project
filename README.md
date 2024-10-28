
# 🛍️ MyBrand E-Commerce Platform

Welcome to **MyBrand**, a full-stack e-commerce application designed to help businesses manage products, users, and transactions with ease. This project combines a modern tech stack with an intuitive UI, creating a robust online shopping experience.

## 📑 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Development Process](#development-process)
- [Challenges & Solutions](#challenges--solutions)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 📌 Project Overview

**MyBrand** is a full-featured e-commerce platform built to empower businesses by providing an intuitive management system for products, users, and orders. With features like user authentication, shopping cart, and order processing, it offers a seamless and responsive shopping experience.

## ✨ Features

- **Product Management**: Easily add, edit, and delete products via the Strapi CMS.
- **User Authentication**: Secure user registration and login.
- **Shopping Cart**: Users can add, remove, and update items in their cart.
- **Responsive Design**: Tailored for all screen sizes using TailwindCSS.
- **Order Management**: Full order tracking and management.

## 🛠️ Technologies Used

- **Front-End**: ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white), ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
- **Back-End**: ![SQL](https://img.shields.io/badge/SQL-003B57?style=flat-square&logo=sqlite&logoColor=white), Custom API
- **Content Management**: ![Strapi](https://img.shields.io/badge/Strapi-2E7EEA?style=flat-square&logo=strapi&logoColor=white)
- **Version Control**: ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ghiFrank/ecommerce-project
   cd ecommerce-project
   ```

2. **Install Dependencies:**
   ```bash
   # Client
   cd client
   npm install
   # Server
   cd ../server
   npm install
   ```

3. **Set up Strapi:**  
   Refer to the [Strapi Documentation](https://strapi.io/documentation) for installation and configuration.

4. **Environment Variables:**
   Add the required environment variables in `.env`:
   ```plaintext
   DATABASE_URL=your_database_url
   STRAPI_URL=http://localhost:1337
   ```

5. **Start the Development Servers:**
   ```bash
   # Start front-end
   cd client
   npm start
   # Start back-end
   cd ../server
   npm start
   ```

6. **Access the Application:**  
   Open `http://localhost:3000` to view in your browser.

## 🔎 Usage

- **Admins** manage products, users, and orders via Strapi.
- **Users** can browse products, add items to their cart, and complete purchases.

## ⚙️ Architecture

- **React**: Client-side rendering and routing.
- **TailwindCSS**: Responsive and efficient styling.
- **SQL Database**: User, product, and transaction management.
- **API**: Communication layer between front-end and back-end.
- **Strapi**: Headless CMS for content and product management.

## 🏗️ Project Structure

```plaintext
mybrand-ecommerce/
├── client/                # Front-end (React + TailwindCSS)
│   ├── public/
│   ├── src/
│       ├── components/    # UI components
│       ├── pages/         # Pages (Home, Product, Cart)
│       └── services/      # API services
│
├── server/                # Back-end (API + SQL)
│   ├── config/
│   ├── controllers/       # API request handling
│   ├── models/            # SQL models
│   └── routes/            # API routes
└── strapi/                # Strapi CMS setup
```

## 📅 Development Process

1. **Planning**: Defined features, created wireframes, and structured initial architecture.
2. **Implementation**:
   - **Week 1**: Database and API setup.
   - **Week 2**: API and front-end integration.
   - **Week 3**: UI styling and Strapi setup.
   - **Week 4**: Testing and final deployment.
3. **Testing**: Focused on major user flows across devices.

## 🚧 Challenges & Solutions

- **Time Constraints**: Managed with a Kanban board.
- **Data Security**: Used encrypted API communication.
- **Strapi Integration**: Resolved issues through documentation review.

## 🚀 Future Enhancements

- **Enhanced Search**: Add full-text search functionality.
- **UI Improvements**: Continue refining the UI for a more dynamic experience.
- **Order Tracking**: Real-time order status updates.
- **Additional Security**: Strengthen data protection.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/NewFeature`
3. **Commit changes**: `git commit -m 'Add NewFeature'`
4. **Push to branch**: `git push origin feature/NewFeature`
5. **Open a pull request**

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---
