const { Schema, model } = require('mongoose');

const ContainerSchema = new Schema({
  _creator: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  motoristName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('Container', ContainerSchema);