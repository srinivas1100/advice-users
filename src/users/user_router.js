const expres = require("express");
const { getAllUsers, createUser } = require("./user_controller");

const router = expres.Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);

module.exports = router;
