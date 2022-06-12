const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/', createUserValid, function (req, res, next) {
//я добавив трай кетч і в кінці виклик респонс
        try {
            let data = UserService.save(req.body);
               res.data = data;
           } catch (err) {
               res.err = err;
           } finally {
               next();
           }

}, responseMiddleware);

// TODO: Implement route controllers for user

module.exports = router;