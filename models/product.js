const mongoose = require('mongoose')

// const TaskSchema = new mongoose.Schema({
//     name:String,
//     completed:Boolean
// })

// module.exports = mongoose.model('Task', TaskScheme)


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be entered"],
        trim: true,
        maxlength: [40, "Name cannot be more than 40 characters"],
    },
    price: {
        type: Number,
        required: [true, "Shoe must have a price"],
        trim: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        required: [true, "Must have rating"]
    },
    createdAt: {
        type: Date,
        default: new Date().toISOString(),
    },
    company: {
        type: String,
        required: [true, "choose category"],
        trim: true,
        maxlength: [20, "Company name cannot be more than 20 characters"],
        enum: { values: ['nike', 'terraria', 'yeezy', 'adidas', 'puma'], message: '{VALUE} not supported' },
    },
    
})

module.exports = mongoose.model('Product',ProductSchema);