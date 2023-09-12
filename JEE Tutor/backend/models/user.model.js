const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UserDetailsScehma = new mongoose.Schema(
        {
          fname: String,
          lname: String,
          email: { type: String, unique: true },
          password: String,
        },
        {
          collection: "UserInfo",
        }
      );

const users=mongoose.model('UserInfo',UserDetailsScehma);

module.exports=users;