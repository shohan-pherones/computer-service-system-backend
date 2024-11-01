import express, { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { login, register } from "./user.controller";
import { loginSchema, userRegistrationSchema } from "./user.validation";

const router: Router = express.Router();

router.post("/sign-up", validate(userRegistrationSchema), register);
router.post("/sign-in", validate(loginSchema), login);

export default router;
