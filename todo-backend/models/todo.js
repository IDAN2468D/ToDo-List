
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({


    _id: {
        type: String,
        auto: true,
        required: true,
    },
    name: {
        type: String,
        unique: false,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },

})

const todoModel = mongoose.model("Todo", todoSchema)

module.exports = todoModel 