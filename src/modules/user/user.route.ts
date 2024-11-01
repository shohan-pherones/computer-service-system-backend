import express, { Router } from "express";
import { validate } from "../../middlewares/validate.middleware";
import { register } from "./user.controller";
import { userRegistrationSchema } from "./user.validation";

const router: Router = express.Router();

router.post("/sign-up", validate(userRegistrationSchema), register);

export default router;
