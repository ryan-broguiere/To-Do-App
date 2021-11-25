const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        default: "loooool"
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model("addedTasks", taskSchema);