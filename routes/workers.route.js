const express = require('express');
const router = express.Router();

const controller = require('../controllers/workers.controller');
const middleware = require('../middlewares/workers.middleware');

router.route('/')
    .get(controller.getWorkers)
    .post(controller.createWorker);

router.route('/:id')
    .get(middleware.workerByIdValidation, controller.getWorker)
    .patch(middleware.workerByIdValidation, controller.updateWorker)
    .delete(middleware.workerByIdValidation, controller.deleteWorker);

module.exports = router;