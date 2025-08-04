const express= require("express");
const { deleteUser, updateUser, registerUser, getAllUsers } = require("../controllers/userControllers");

const router= express.Router();
//http://localhost:6000/user
router.get("/", getAllUsers);

router.post("/", registerUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports= router;