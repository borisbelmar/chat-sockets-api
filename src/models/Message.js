const mongoose = require('mongoose');
const {Schema} = mongoose;

const MessageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true },
  body: { type: String, required: true }
}, 
{ 
  timestamps: true 
})

module.exports = mongoose.model('Message', MessageSchema)