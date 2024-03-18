const workerService = require('../services/workers.service');
const createError = require('http-errors');

async function createWorker(req, res, next) {
    try {
       const newWorker = await workerService.create(req.body);

        res.status(200).json({
            status: 200,
            data: newWorker,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

async function getWorkers(req, res, next) {
    try {
        res.status(200).json({
            status: 200,
            data: await workerService.find(),
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

async function getWorker(req, res, next) {
    try {
        const { id } = req.params;
        const worker = await workerService.findById(id);

        if (!worker) {
            return res.status(400).json({
                status: 400,
                message: 'worker not found.',
            });
        }

        res.status(200).json({
            status: 200,
            data: worker,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

async function updateWorker(req, res, next) {
    try {
        const { id } = req.params;
        const workerData = req.body;
        const workerUpdated = await workerService.update(id, workerData);

        res.status(200).json({
            status: 200,
            data: workerUpdated,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

async function deleteWorker(req, res, next) {
    try {
        const { id } = req.params;
        await workerService.remove(id);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};

module.exports = {
    createWorker,
    getWorkers,
    getWorker,
    updateWorker,
    deleteWorker,
};