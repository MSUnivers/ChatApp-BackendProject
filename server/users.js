const users = [];
const addUser = ({ id, name, room }) => {
    //JavaScript Mastery to javascriptmastery
    name = name.trim().toLowerCase();

    room = room.trim().toLowerCase();
    //check if a user name is already existing in a same room
    const existingUser = users.find((user) => user.room === room && user.name === name);
    if (existingUser) {
        return { error: 'UserName is taken' };
    }
    const user = { id, name, room };
    users.push(user);
}

const removeUser = () => {
const index=users.findIndex(user => user.id ===id);
if(index!=-1){
    return users.splice(index, 1);
}
}
const getUser = (id) => users.find(user => user.id ===id);


const getUserInRoom = (room) => users.filter(user => user.room === room);

module.exports = {getUser,getUserInRoom,addUser,removeUser};