const express=require('express');
const router=express.Router();
const {createRoom,joinRoom,getRooms}=require('../controllers/roomsController')



router.route('/test').get((req,res)=>{
console.log('hiii')
    res.send('this is the room route')
})
router.get('/',getRooms)
router.post('/addRoom',createRoom);
router.put('/join/:uid/:rid',joinRoom)



module.exports=router;