const mongoose = require('mongoose');

const chatchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true,'Must have name'],
    },
    message: {
        type: String,
        required: [true,'Must have'],
    },
    
},
{ timestamps: true });
module.exports.Chat = mongoose.model('Chat', chatchema);

