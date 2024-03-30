const workerService = require('../services/workers.service');

async function createWorker(req, res) {
    try {
       const newWorker = await workerService.create(req.body);

        res.status(201).json({
            status: 201,
            data: newWorker,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function getWorkers(req, res) {
    try {
        res.status(200).json({
            status: 200,
            data: await workerService.find(),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function getWorker(req, res) {
    try {
        const { id } = req.params;
        const worker = await workerService.findById(id);

        if (!worker) {
            return res.status(404).json({
                status: 404,
                message: 'worker not found.',
            });
        }

        res.status(200).json({
            status: 200,
            data: worker,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function updateWorker(req, res) {
    try {
        const { id } = req.params;
        const workerData = req.body;
        const workerUpdated = await workerService.update(id, workerData);

        res.status(200).json({
            status: 200,
            data: workerUpdated,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function deleteWorker(req, res) {
    try {
        const { id } = req.params;
        await workerService.remove(id);

        res.status(204).json({
            status: 204,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

module.exports = {
    createWorker,
    getWorkers,
    getWorker,
    updateWorker,
    deleteWorker,
};