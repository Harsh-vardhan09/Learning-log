import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/passport').then(()=>{
    console.log('db connected');
    
});

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const UserModel = mongoose.model('User', userSchema);

export default UserModel