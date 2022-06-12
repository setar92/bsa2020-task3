const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');


const router = Router();

router.get('/', function (req, res, next) {
    //я добавив трай кетч і в кінці виклик респонс
            try {
                let data = FighterService.getAll();
                   res.data = data;
               } catch (err) {
                   res.err = err;
               } finally {
                   next();
               }
    
    }, responseMiddleware);

    router.post('/', createFighterValid, function (req, res, next) {
                try {
                    let data = FighterService.create(req.body);
                       res.data = data;
                   } catch (err) {
                       res.err = err;
                   } finally {
                       next();
                   }    
        }, responseMiddleware);
    






// TODO: Implement route controllers for fighter

module.exports = router;