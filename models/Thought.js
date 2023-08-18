const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            get: (date) => {
                if (date) return date.toISOString().split("T") [0]
            // default: Date.now, 
        },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: 
            [Reaction],
    },
    {
        toJSON: {
            getters: true, virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});

module.exports = Thought;