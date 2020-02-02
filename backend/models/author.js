// The Author model 
// = it is how we interact with the Author collection on MongoDB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String, 
    age: Number
})

module.exports = mongoose.model('Author', authorSchema);