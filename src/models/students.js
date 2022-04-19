const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exists"],
    validate(values) {
      if (!validator.isEmail(values)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
  },
  address: {
    type: String,
    required: true,
  },
});
const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;
