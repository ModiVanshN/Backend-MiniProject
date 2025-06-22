# 🌐 Mini Social Media Project 🚀

A fun and functional **social media web app** built using **Node.js**, **Express**, **MongoDB**, **EJS**, and **Tailwind CSS**! Users can **register**, **log in**, **create posts**, **like/unlike**, **edit posts**, and even **upload profile pictures** 🖼️. The app features a clean, responsive UI and a feed of **random posts** to keep things interesting ✨.

---

## ✨ Features

- ✅ **User Registration & Login** (JWT + Cookies)  
- 🖼️ **Profile Page** with Profile Picture Upload  
- 📝 **Create, Edit, Like & Unlike Posts**  
- 📱 **Responsive Design** with Tailwind CSS  
- 🎲 **Random Post Feed** from the community  
- 🧠 **EJS Templating** for clean server-rendered pages

---

## 📸 Screenshots

<img src="VISUALS/Screenshot 2025-06-22 090639.png">
<img src="VISUALS/Screenshot 2025-06-22 090819.png">

---

## ⚙️ Getting Started

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)  
- [npm](https://www.npmjs.com/)

---

### 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/miniproject.git
   cd miniproject
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Create Uploads Directory:**

   Ensure this directory exists for storing profile pictures:
   ```
   public/images/uploads
   ```

---

### ▶️ Running the App

Start the server with:

```bash
npm start
```

Visit your app at: [http://localhost:3000](http://localhost:3000) 🌐

---

## 🧑‍💻 Usage

- 🆕 Register or log in with your credentials  
- 🖼️ Upload a profile picture from your profile page  
- ✏️ Create new posts directly from your profile  
- ❤️ Like or 💔 Unlike posts from others  
- 🛠️ Edit your own posts anytime  
- 🌍 Explore random posts from the global feed

---

## 📁 Folder Structure

```
miniproject/
├── app.js
├── models/
│   ├── user.js
│   └── post.js
├── config/
│   └── multerconfig.js
├── public/
│   └── images/uploads/
├── views/
│   ├── profile.ejs
│   ├── upload.ejs
│   ├── random-posts.ejs
│   └── ...
├── package.json
└── readme.md
```

---

## 📦 Dependencies

- **express** 🛠️  
- **mongoose** 📊  
- **ejs** 🧠  
- **bcrypt** 🔐  
- **jsonwebtoken** 🔑  
- **multer** 🧾  
- **cookie-parser** 🍪  
- **body-parser** 📩  
- **tailwindcss** 🎨 (via CDN)

---

## 📄 License

This project is licensed under the **MIT License** 📃

---

## 👨‍💻 Author

- ✍️ Vansh Modi 
- 🔗 [GitHub Profile](https://github.com/ModiVanshN)
