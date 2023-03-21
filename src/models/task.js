const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  {
    Guild: String,
    User: String,
    Task: String,
    Code: String,
  },
  { timestamps: true }
);

module.exports = model("Task", TaskSchema);
