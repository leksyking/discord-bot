const { Schema, model } = require("mongoose");

const UserSchema = new Schema({}, { timestamps: true });

module.exports = model("User", UserSchema);
