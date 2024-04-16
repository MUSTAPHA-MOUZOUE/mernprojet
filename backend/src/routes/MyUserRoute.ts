import express  from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middlewere/auth";
import { validateMyUserRequest } from "../middlewere/validation";
const router = express.Router();
router.post("/", MyUserController.creatCurrentUser);
router.put("/", MyUserController.updateCurrentUser)
export default router;