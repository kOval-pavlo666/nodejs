const express = require('express');
const router = express.Router();

const controller = require('../controllers/workers.controller');

router.route('/')
    .get(controller.getWorkers)
    .post(controller.createWorker);

router.route('/:id')
    .get(controller.getWorker)
    .patch(controller.updateWorker)
    .delete(controller.deleteWorker);

module.exports = router;