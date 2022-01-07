const express=require('express');
const router=express.Router();



router.route('/test').get((req,res)=>{
console.log('hiii')
    res.send('this is the room route')
})



module.exports=router;