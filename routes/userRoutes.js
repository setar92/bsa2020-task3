const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get('/:id', function (req, res, next) {
    try {
        let data = UserService.getOne();
        res.data = data;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }

}, responseMiddleware);

router.get('/', function (req, res, next) {
    try {
        let data = UserService.getAll();
        res.data = data;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }

}, responseMiddleware);

router.post('/', createUserValid, function (req, res, next) {
    try {
        let data = UserService.save(req.body);
        res.data = data;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }

}, responseMiddleware);

router.delete('/:id', function (req, res, next) {
    try {
        let data = UserService.delete(req.params.id);
        res.data = data;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }

}, responseMiddleware);

router.put('/:id', updateUserValid, function (req, res, next) {
    try {
        let data = UserService.update(req.params.id, req.body);
        res.data = data;
    } catch (err) {
        res.err = err;
    } finally {
        next();
    }

}, responseMiddleware);

// TODO: Implement route controllers for user

module.exports = router;