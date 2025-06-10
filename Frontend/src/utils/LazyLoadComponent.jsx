import  { lazy } from "react";
export const Navbar = lazy(() => import("../components/Navbar"));
export const Login = lazy(() => import("../pages/Login"));
export const Signup = lazy(() => import("../pages/Signup"));
export const Users = lazy(() => import("../pages/Users"));
export const Setting = lazy(() => import("../pages/Setting"));
export const Home = lazy(() => import("../pages/Home"));
export const ProtectedRoute = lazy(() => import("../context/ProtectedRoutes"));
export const Layout = lazy(() => import("../layout/Layout"));
