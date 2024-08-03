const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const createUser = new Schema({

  username: {type:String , required:true , trim:true , unique:true},
  email: {type:String , required:true , trim:true , unique:true},
  password: {type: String , required:true , trim:true}
});


const UserModal = mongoose.model('User', createUser)//mongodb veritabanzıda collection isimleri
                                               //küçük harfe çevrilir ve s çoğul eki getirilir

module.exports = UserModal