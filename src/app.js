const express = require("express");
const app = express();
require("./db/connection");
const Student = require("./models/students");
const port = process.env.PORT || 8000;
app.use(express.json());
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createdStudent = await user.save();
    res.status(201).send(createdStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.listen(port, () => {
  console.log(`Connected 👍 to ${port}`);
});
