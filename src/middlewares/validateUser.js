// src/middlewares/validateUser.js

/**
 * Simple validation middleware for user create/update.
 *
 * Usage:
 *  - For POST /users  -> require name + email
 *  - For PUT /users/:id -> allow partial update but validate fields if present
 *
 * Responds 400 if validation fails, otherwise calls next().
 */
const isValidEmail = (email) =>{
    return typeof email === "string"&& /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


export const validateCreateUser = (req,res,next)=>{
    const {name,email}= req.body;

    const errors = [];
    if(!name ||typeof name !== "string"||!name.trim()){
        errors.push("name is required and must be a non empty string");
    }
    if(!email ||typeof email !== "string"||!isValidEmail(email)){
        errors.push("email is required and must be valid email");
    }
    
    if(errors.length){
        return res.status(400).json({errors});
    }

    next();
}

export const validateUpdateUser = (req, res, next) => {
  const { name, email } = req.body;
  const errors = [];

  // For update we allow partial changes, but if a field is present it must be valid
  if (Object.prototype.hasOwnProperty.call(req.body, "name")) {
    if (!name || typeof name !== "string" || !name.trim()) {
      errors.push("if provided, name must be a non-empty string");
    }
  }

  if (Object.prototype.hasOwnProperty.call(req.body, "email")) {
    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      errors.push("if provided, email must be a valid email address");
    }
  }

  if (errors.length) {
    return res.status(400).json({ errors });
  }
  next();
};