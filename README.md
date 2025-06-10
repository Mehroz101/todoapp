# Todo App

This repository contains a full-stack Todo application with a React frontend and a Node.js/Express backend.

## Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Notes](#notes)

---

## Project Structure

```
Backend/      # Node.js/Express backend
Frontend/     # React frontend (Vite)
```

## Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

---

## Backend Setup

1. Navigate to the backend folder:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file:
   - Copy `example.env.txt` to `.env` and fill in the required values.
   ```sh
   cp example.env.txt .env
   # Edit .env as needed
   ```
4. Start the backend server:
   ```sh
   # or for development with auto-reload (if nodemon is installed)
   npm run dev
   ```
   The backend will typically run on `http://localhost:5000` (check your `.env`).

---

## Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```sh
   cd Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The frontend will typically run on `http://localhost:5173` (default Vite port).

---

## Environment Variables
- **Backend:**
  - See `Backend/example.env.txt` for required variables (e.g., `PORT`, `MONGO_URI`, `JWT_SECRET`, etc).
- **Frontend:**
  - If you need to configure API URLs, create a `.env` file in `Frontend/` (see Vite docs for variable naming).

---

## Running the Application
1. Start the backend server (see above).
2. Start the frontend server (see above).
3. Open your browser at the frontend URL (e.g., `http://localhost:5173`).

---

## API Endpoints
- Auth: `/api/auth/*`
- Todos: `/api/todos/*`

See backend code for details.

---

## Notes
- File uploads are stored in `Backend/uploads/`.
- Make sure MongoDB is running and accessible.
- For production, build the frontend and serve it with a static server or integrate with the backend.


