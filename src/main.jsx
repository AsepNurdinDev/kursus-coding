import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/Register.jsx";
import HomePage from "./pages/Home";
import CoursesPage from "./pages/Courses/CoursesPage.jsx";
import Kelas from "./pages/Courses/Kelas/index.jsx";
import Kelashtml from "./pages/Courses/kelasHTML/index.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/courses",
    element: (
      <ProtectedRoute>
        <CoursesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kelas",
    element: <Kelas />,
  },
  {
    path: "/kelashtml",
    element: <Kelashtml />,
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
