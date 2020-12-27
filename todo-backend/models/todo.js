
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({


    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true,
        index: true
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