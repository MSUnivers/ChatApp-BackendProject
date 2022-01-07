const mongoose=require('mongoose');
const {Schema}=mongoose;

const roomSchema=new Schema({
roomName: {type: String},
createDate: {type: Date},
userId:[{type:Schema.Types.ObjectId,ref:'User'}]

});
module.exports=mongoose.model('Room',roomSchema);