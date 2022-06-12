const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');


const router = Router();

router.get('/', function (req, res, next) {
    //я добавив трай кетч і в кінці виклик респонс
            try {
                let data = FighterService.getAll();
                console.log('пробуємо завантажити бійців');
                   res.data = data;
               } catch (err) {
                   res.err = err;
               } finally {
                   next();
               }
    
    }, responseMiddleware);

    router.post('/', createFighterValid, function (req, res, next) {
                try {
                    console.log('пробуємо зберегти нового бійця');
                    let data = FighterService.create(req.body);
                    console.log('пробуємо зберегти нового бійця', data);
                       res.data = data;
                   } catch (err) {
                       res.err = err;
                   } finally {
                       next();
                   }
        
        }, responseMiddleware);
    






// TODO: Implement route controllers for fighter

module.exports = router;