// const mongoose = require('mongoose');


// const TodoItemSchema = new mongoose.Schema({
//     item:{
//         type: String,
//         required: true
//     }
// })

// const ItemModel = mongoose.model('todo', TodoItemSchema);
// module.exports = {ItemModel};




const mongoose = require('mongoose');

// create schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true
    }
})

module.exports =  mongoose.model('todo', TodoItemSchema);
