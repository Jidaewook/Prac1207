const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BbsSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    files: {
        type: Object
    },
    link: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('bbs', BbsSchema);
