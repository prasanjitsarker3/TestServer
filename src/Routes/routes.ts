import express from "express";
import { userRoutes } from "../Modules/User/user.routes";
import { authRoutes } from "../Modules/Auth/auth.routes";

const router = express.Router();

const moduleRoute = [
  {
    path: "/users",
    element: userRoutes,
  },
  {
    path: "/auth",
    element: authRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.element));
export default router;
