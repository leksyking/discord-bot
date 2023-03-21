const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  {
    guildId: String,
    userId: String,
    task: String,
    code: String,
  },
  { timestamps: true }
);

module.exports = model("Task", TaskSchema);
