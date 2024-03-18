const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const workerService = require('../services/workers.service');

async function workerByIdValidation(req, res, next) {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            throw createError.BadRequest("worker id is not valid");
        }

        const worker = await workerService.findById(id);

        if (!worker) {
            throw createError.NotFound("worker with such id not found");
        }

        next();
    } catch(err) {
        next(err);
    }
};

module.exports = {
    workerByIdValidation,
};