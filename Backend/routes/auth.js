const express = require('express');
const User = require('../models/User');
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);
})

module.exports = router;