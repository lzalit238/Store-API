const mongoose = require('mongoose')

// const TaskSchema = new mongoose.Schema({
//     name:String,
//     completed:Boolean
// })

// module.exports = mongoose.model('Task', TaskScheme)


const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Name must be entered"],
        trim: true,
        maxlength:[40, "Name cannot be more than 40 characters"]
    },
    category: {
        type: String,
        required: [true, "choose category"],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Product',ProductSchema);