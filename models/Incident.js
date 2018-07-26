const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const IncidentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    file: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            comment: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Incident = mongoose.model('incidents', IncidentSchema);
