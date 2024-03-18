// 11) сутність "працівник поліклініки": ПІП, спеціальність, розклад прийому (день тижня, початок
//     прийому, кінець прийому, кабінет, ділянка).
const mongoose = require('mongoose');
const express = require("express");
const { port , mongodb_uri } = require("./config");
const createError = require('http-errors');

const workersRouter = require('./routes/workers.route');

const app = express();
app.use(express.json());

// Application-level middleware. Executed every time the app receives a request
app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method}: ${req.path}`);
  next();
});

// An endpoint to hadle base url route GET request
app.get('/', (req, res) => {
  res.status(200).json({
      status: 200,
      data: {
        message: "Node.js ExApp"
      }
  })
});

// Error-handling middleware. Handling global application errors
app.use((err, req, res, next) => {
  const erorrStatus = err.status || 500;
  console.error(`${'\x1b[31m'}[${new Date().toUTCString()}] ${req.method}: ${req.path}. Error(${erorrStatus}): ${err.message}`, '\x1b[0m');
  res.status(erorrStatus).send({
      status: erorrStatus,
      error: err
  });
});


app.use("/workers", workersRouter);

mongoose.connect(mongodb_uri)
  .then(() => {
    console.log('Mongo DB connected');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
