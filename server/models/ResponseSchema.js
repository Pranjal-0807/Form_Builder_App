const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
    responses: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model('Response', responseSchema);