const expres = require('express');
const { getAllUsers } = require('./user_controller');

const router = expres.Router();

router.get('/users', getAllUsers);

module.exports = router;