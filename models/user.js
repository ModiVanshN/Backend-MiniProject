const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/userDB')

const userSchema=new mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    email:String,
    password:String,
    profilepic:{
        type:String,
        default:'vecteezy_animal-smile-happy-character_21946764.jpg'
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }
    ]
});
module.exports =mongoose.model('user',userSchema);



