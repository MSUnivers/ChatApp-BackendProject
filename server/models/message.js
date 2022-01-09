const mongoose = require('mongoose');
const {Schema}=mongoose;

const messageSchema = new Schema({
text: {type: 'string'},
userId:[{type:Schema.Types.ObjectId,ref:'User'}],
roomId:[{type:Schema.Types.ObjectId,ref:'Room'}]

})
module.exports =mongoose.model('Message',messageSchema)