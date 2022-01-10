const express=require('express');
const router=express.Router();
const { createRoom, joinRoom, getRooms, getRoomById, deleteRoomById }=require('../controllers/roomsController')



router.route('/test').get((req,res)=>{
    res.send('this is the room route')
})
router.get('/',getRooms)
router.post('/addRoom',createRoom);
router.get('/:rid',getRoomById);
router.put('/join/:uid/:rid',joinRoom);
router.delete('/:rid', deleteRoomById);

module.exports=router;