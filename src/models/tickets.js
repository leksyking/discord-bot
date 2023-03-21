const { Schema, model } = require("mongoose");

const TicketSchema = new Schema(
  {
    Guild: String,
    Role: String,
    Category: String,
    Logs: String,
    Channel: String,
    TicketCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = model("Ticket", TicketSchema);
