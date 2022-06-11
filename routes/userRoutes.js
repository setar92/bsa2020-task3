const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/', createUserValid, function(req, res, next) {
   let user = UserService.save(req.body);
    // const result = getName(req.body);
  
    // if (result) {
    //   res.send(`Your name is ${result}`);
    // } else {
    //   res.status(400).send(`Some error`);
    // }
    console.log(user);
    res.send( 'user' );
  });

// TODO: Implement route controllers for user

module.exports = router;