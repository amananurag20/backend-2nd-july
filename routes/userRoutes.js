const express= require("express");
const { deleteUser, updateUser, registerUser, getAllUsers, loginUser } = require("../controllers/userControllers");

const router= express.Router();
//http://localhost:6000/user
router.get("/", getAllUsers);

router.post("/", registerUser);

router.post("/login", loginUser)

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports= router;