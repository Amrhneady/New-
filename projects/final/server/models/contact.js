var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("Contact", contactSchema);