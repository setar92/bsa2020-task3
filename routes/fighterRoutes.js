const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');


const router = Router();

router.get('/:id', function (req, res, next) {
    try {
        let data = FighterService.getOne(req.params.id);
        res.data = data;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }

}, responseMiddleware);

router.get('/', function (req, res, next) {
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



router.delete('/:id', function (req, res, next) {
    try {
        let data = FighterService.delete(req.params.id);
        res.data = data;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }

}, responseMiddleware);

router.put('/:id', updateFighterValid, function (req, res, next) {
    try {
        let data = FighterService.update(req.params.id, req.body);
        res.data = data;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }

}, responseMiddleware);





// TODO: Implement route controllers for fighter

module.exports = router;