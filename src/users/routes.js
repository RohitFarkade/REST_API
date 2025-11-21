import express from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "./controllers.js";
import { validateCreateUser,validateUpdateUser } from "../middlewares/validateUser.js";

const router = express.Router();





//  Users Routers
// GET /users -> delegated to controller
router.get("/", getAllUsers);

// GET /users/:id -> delegated to controller
router.get("/:id", getUserById);

// POST /users -> create new user (validate body first)
router.post("/", validateCreateUser, createUser);

// PUT /users/:id -> update user (validate provided fields first)
router.put("/:id", validateUpdateUser, updateUser);

// DELETE /users/:id -> delete user
router.delete("/:id", deleteUser);

export default router;

