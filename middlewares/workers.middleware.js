const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const workerService = require('../services/workers.service');
const { WorkerSchema } = require('../schemas/users.schemas');

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

const workerDataValidation = async (req, res, next) => {
    try {
        const { error } = WorkerSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        const worker = await workerService.findOne({
            fullName: req.body.fullName
        });

        if (worker) {
            throw createError.BadRequest("Worker with such fullname already exist");
        }

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    workerByIdValidation,
    workerDataValidation
};