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
import Program from "./pages/program/Program.jsx";
import EventPage from "./pages/Events/Event.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Kelascss from "./pages/Courses/kelasCSS/Kelascss.jsx";


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
    path: "/program",
    element: <Program />,
  },
  {
    path: "/event",
    element: <EventPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
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
    element: (
      <ProtectedRoute>
        <Kelas />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kelashtml",
    element: (
      <ProtectedRoute>
        <Kelashtml />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kelascss",
    element: (
      <ProtectedRoute>
        <Kelascss />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
