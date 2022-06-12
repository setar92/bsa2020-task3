const { Router } = require('express');
const FightService = require('../services/fightService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');


const router = Router();
router.get('/', function (req, res) {
    console.log('Hello')
    //я добавив трай кетч і в кінці виклик респонс
    res.send('Hello from fight');
    
});
// OPTIONAL TODO: Implement route controller for fights

module.exports = router;