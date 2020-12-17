const mongoose = require("mongoose")


module.exports.Todo = require("./models/todo")

mongoose.connect("mongodb://localhost:27017/todo-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.set("debug", true)
mongoose.Promise = Promise 