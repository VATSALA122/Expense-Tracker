# 💰 Expense Tracker

A full-stack **Expense Tracker Web Application** that helps users manage income and expenses, visualize financial data, and gain insights into spending patterns through interactive dashboards.

---

## 🚀 Features

* 🔐 User Authentication (Sign Up / Login)
* 💸 Add, Edit, Delete Expenses & Income
* 📊 Interactive Charts (Bar, Line, Pie)
* 📅 Track recent transactions & last 30 days data
* 📈 Financial overview dashboard
* 🧾 Categorized expense tracking
* 🖼️ Profile image upload support
* ⚡ Responsive and user-friendly UI

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React.js (Vite)
* JavaScript (ES6+)
* CSS
* Axios
* Chart libraries (for data visualization)

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Multer (for file uploads)

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the repository

```bash
git clone https://github.com/VATSALA122/Expense-Tracker.git
cd Expense-Tracker
```

---

### 🔹 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 🔹 3. Setup Frontend

```bash
cd frontend/expense-tracker
npm install
npm run dev
```

## 🔐 Environment Variables

Make sure to add a `.env` file in the backend:

```
MONGO_URI=your_database_url
JWT_SECRET=your_secret
PORT=5000
```

---

## 🧠 Key Learnings

* Built a complete full-stack application from scratch
* Implemented secure authentication using JWT
* Managed global state using React Context & Hooks
* Created reusable UI components
* Integrated data visualization for better UX

---

