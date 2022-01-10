const roomSchema = require('../models/room')
const userSchema = require('../models/User')

//create Room to be handled by the admin
async function createRoom(req, res, next) {
    try {
        const room = req.body;
        const newRoom = await new roomSchema(room);
        newRoom.save();
        res.send(newRoom)
    } catch (error) {
        next(error)
    }

}

async function getRooms(req, res, next) {

    try {
        const allRooms = await roomSchema.find().populate('usersId', 'username email');
        res.send(allRooms)
    } catch (error) {

    }
}

async function getRoomById(req, res, next) {
    try {
        const roomId = req.params.rid;
        const room = await roomSchema.findById(roomId);
        res.status(200).send(room)
    } catch (error) {
        next(error)
    }


}

async function deleteRoomById(req, res, next) {
    try {
        const roomId = req.params.rid;
        const result = await roomSchema.findByIdAndDelete(roomId);
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

async function joinRoom(req, res, next) {

    try {
        const userToJoin = req.params.uid;
        const roomToJoin = req.params.rid
        const joinedUser = await userSchema.findById(userToJoin);
        const joinedRoom = await roomSchema.findByIdAndUpdate({ _id: roomToJoin }, { $push: { usersId: joinedUser._id } }, { new: true })

        res.send(joinedRoom)

    } catch (error) {
        next(error)
    }
}
module.exports = { createRoom, joinRoom, getRooms, getRoomById, deleteRoomById };