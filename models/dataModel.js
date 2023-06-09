/*
require:
-mongoose
-bcrypt
-jwt (jsonwebtoken)

create:
- data model schema
- data model
-hash data
-generateAuthToken method of dataSchema

export:
- model
*/

/*
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, 'secret');
  return token;
};

const User = mongoose.model('User1', userSchema);

module.exports = User;
*/
