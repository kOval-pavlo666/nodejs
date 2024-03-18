const workerModel = require("../models/worker.model");

async function create(worker) {
  return workerModel.create(worker);
}

async function find() {
  return {
    items: await workerModel.find(),
    count: await workerModel.countDocuments(),
  };
}

async function findById(id) {
  return workerModel.findById(id);
}

async function update(id, update) {
  return workerModel.findByIdAndUpdate(id, update, { upsert: false, new: true });
}

async function remove(id) {
  return workerModel.findByIdAndDelete(id);
}

async function findOne(filter) {
  return workerModel.findOne(filter);
}

module.exports = {
  create,
  find,
  findById,
  update,
  remove,
  findOne
};
