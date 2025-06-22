# Mini Social Media Project

A simple social media web application built with Node.js, Express, MongoDB, EJS, and Tailwind CSS. Users can register, log in, create posts, like/unlike posts, edit their posts, and upload a profile picture. The app features a responsive design and a random posts feed.

---

## Features

- User registration and authentication (JWT + cookies)
- Profile page with profile picture upload
- Create, edit, and like/unlike posts
- Responsive UI with Tailwind CSS
- Random posts feed
- EJS templating

---

## Screenshots

> _Add screenshots of your app here if you want!_

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [npm](https://www.npmjs.com/)

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/miniproject.git
   cd miniproject
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. **Create uploads directory:**

   Make sure the following directory exists for profile pictures:
   ```
   public/images/uploads
   ```

---

### Running the App

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000) by default.

---

## Usage

- Register a new account or log in.
- Upload a profile picture from your profile page.
- Create new posts from your profile.
- Like/unlike posts.
- Edit your own posts.
- View random posts from all users.

---

## Folder Structure

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

## Dependencies

- express
- mongoose
- ejs
- bcrypt
- jsonwebtoken
- multer
- cookie-parser
- body-parser
- tailwindcss (via CDN)

---

## License

MIT

---

## Author

-