import express from "express";
import { deleteUser, getUser, newUser, updateUser } from "../Controllers/userControllers.js";

const router = express.Router();

router.post("/create",newUser);
router.get("/users",getUser);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);

export default router