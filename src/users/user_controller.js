const User = require("./user_model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    getAllUsers: getAllUsers
}