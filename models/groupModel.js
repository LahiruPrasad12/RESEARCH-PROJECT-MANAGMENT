const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter name'],
        unique: true,
        lowercase: true,
    },
    topicID : String
});

const Group = mongoose.model('Groups', groupSchema);
module.exports = Group;