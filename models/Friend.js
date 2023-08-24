const { Schema, Types } = require('mongoose');

const friendSchema = new Schema(
  {
    friendId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    friendName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: 'Unnamed friend',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true, virtuals: true,
    },
    id: false,
  }
);


module.exports = friendSchema;
