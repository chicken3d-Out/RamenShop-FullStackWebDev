const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render('index');
})

router.get("/login", (req, res, next) => {
    const {name, age, message} = req.query
    res.render('login' , {
        data : [name, age, message]
    });
})



module.exports = router;