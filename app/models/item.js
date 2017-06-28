// model based on generic items

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ItemSchema = new Schema({
    id: String
});

module.exports = mongoose.model("Item", ItemSchema);
