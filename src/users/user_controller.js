const User = require("./user_model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
}

const createUser = async (req, res) => {
    const body = req.body;
    try {
        const user = new User(body);
        user.save();
        res.status(200).send(user);
    } catch (error) {
         res.status(400).send(error);
    }
}

module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser,
}