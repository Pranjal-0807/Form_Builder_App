const mongoose = require('mongoose');

const inputSchema = new mongoose.Schema({
    id: String,
    type: String,
    label: String,
    placeholder: String,
});

const formSchema = new mongoose.Schema({
    title: String,
    inputs: [inputSchema],
});

module.exports = mongoose.model('Form', formSchema);