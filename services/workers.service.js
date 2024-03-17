const fs = require("fs");

const mockData = require("../helpers/workers.json");
const workersFile = "./helpers/workers.json";

//Генерую айді
function _generateId() {
  ids = [];
  mockData.forEach((element) => {
    ids.push(element["id"]);
  });
  //Знаходжу масимальне значення з списку id
  return Math.max.apply(Math, ids) + 1;
}

async function create(worker) {
  const newWorker = { id: _generateId(), ...worker };
  let workers = mockData;
  workers.push(newWorker);
  fs.writeFile(
    workersFile,
    JSON.stringify(workers, null, 2),
    "utf8",
    (err) => {}
  );
  return newWorker;
}

async function find() {
  const searchResult = mockData;

  return {
    items: searchResult,
    count: searchResult.length,
  };
}

async function findById(id) {
  //Айді повертається як стрінга, тому я її перетворюю на число
  id = Number(id);
  const worker = mockData.filter((worker) => worker["id"] === id);
  return worker;
}

async function update(workerId, workerData) {
  //Айді повертається як стрінга, тому я її перетворюю на число
  workerId = Number(workerId);
  let workers = mockData;
  const index = workers.findIndex((u) => u["id"] === workerId);
  if (index === -1) return;

  const updatedWorker = { ...workers[index], ...workerData, id: workerId };
  workers[index] = updatedWorker;
  fs.writeFile(workersFile, JSON.stringify(workers, null, 2), "utf8",(err)=>{});
  return workers[index];
}

async function remove(id) {
  //Айді повертається як стрінга, тому я її перетворюю на число
  id = Number(id);
  let workers = mockData;
  workers = workers.filter((worker) => worker["id"] !== id);
  fs.writeFile(workersFile, JSON.stringify(workers, null, 2), "utf8",(err)=>{});
}

module.exports = {
  create,
  find,
  findById,
  update,
  remove,
};
