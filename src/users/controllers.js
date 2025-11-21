import {
  getAllUsers as serviceGetAll,
  getUserById as serviceGetById,
  createUser as serviceCreate,
  updateUser as serviceUpdate,
  deleteUser as serviceDelete
} from "./service.js";

//controller: get/users

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await serviceGetAll();
        res.status(200).json({data:users});
    }
    catch (err) {
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await serviceGetById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
};


// (Optional) Example controller for POST /users
export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "name and email are required" });
    }
    const newUser =  await serviceCreate({ name, email });
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

// (Optional) Example controller for PUT /users/:id
export const updateUser = async (req, res, next) => {
  try {
    const updated =  await serviceUpdate(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

// (Optional) Example controller for DELETE /users/:id
export const deleteUser = async (req, res, next) => {
  try {
    const deleted = await serviceDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};