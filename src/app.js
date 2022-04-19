const express = require("express");
const app = express();
require("./db/connection");
const Student = require("./models/students");
const port = process.env.PORT || 8000;
app.use(express.json());
app.post("/students", (req, res) => {
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
       res.status(400).send(e);
    });
});
app.listen(port, () => {
  console.log(`Connected 👍 to ${port}`);
});
