// 11) сутність "працівник поліклініки": ПІП, спеціальність, розклад прийому (день тижня, початок
//     прийому, кінець прийому, кабінет, ділянка).
const express = require("express");
const { port } = require("./config");

const workersRouter = require('./routes/workers.route');

const app = express();
app.use(express.json());

app.use("/workers", workersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
