import express from "express";
import validationRequest from "../../Middleware/validationRequest";
import { userLoginSchema, userRegistrationSchema } from "./authValidation";
import { authController } from "./authController";
import auth from "../../Middleware/auth";

const router = express.Router();

router.post(
  "/register",
  validationRequest(userRegistrationSchema),
  authController.userRegister
);
router.post(
  "/login",
  validationRequest(userLoginSchema),
  authController.userLogin
);

export const authRoutes = router;
