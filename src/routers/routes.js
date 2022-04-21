const express = require("express");
const router = new express.Router();
const Student = require("../models/students");
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createdStudent = await user.save();
    res.status(201).send(createdStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    if (!studentData) {
      return res.status(404).send();
    } else {
      {
        res.status(200).send(studentData);
      }
    }
  } catch (e) {
    res.status(500).send(e);
  }
});
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id);
    if (!req.params.id) {
      return res.status(400).send("Invalid ID");
    } else {
      {
        res.status(200).send(deleteStudent);
      }
    }
  } catch (e) {
    res.status(500).send(e);
  }
});
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!req.params.id) {
      return res.status(400).send("Invalid ID");
    } else {
      res.status(200).send(updateStudent);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});
module.exports = router;
