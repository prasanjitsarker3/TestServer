import express from "express";
import validationRequest from "../../Middleware/validationRequest";
import { adminValidationSchema } from "./userValidation";
import { userController } from "./userController";
const router = express.Router();

router.post(
  "/create",
  validationRequest(adminValidationSchema.createAdminSchema),
  userController.createAdmin
);

router.get("", userController.getAllUser);

export const userRoutes = router;
