// 11) сутність "працівник поліклініки": ПІП, спеціальність, розклад прийому (день тижня, початок
//     прийому, кінець прийому, кабінет, ділянка).
const mongoose = require('mongoose');
const express = require("express");
const { port , mongodb_uri } = require("./config");

const workersRouter = require('./routes/workers.route');

const app = express();
app.use(express.json());

app.use("/workers", workersRouter);

mongoose.connect(mongodb_uri)
  .then(() => {
    console.log('Mongo DB connected');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
