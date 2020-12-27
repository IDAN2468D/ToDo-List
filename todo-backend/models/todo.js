
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({


    _id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },

})

const todoModel = mongoose.model("Todo", todoSchema)

module.exports = todoModel 