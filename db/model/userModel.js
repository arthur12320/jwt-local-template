const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  data: {
    type: String
  }
});


userSchema.pre('save', async function (next) {
  try {
    //generate a salt 
    const salt = await bcrypt.genSalt(10)
    //generate salt+hash
    const hashedPasswd = await bcrypt.hash(this.password, salt);
    //sobreescrita da hasheada
    this.password = hashedPasswd;
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
}

const User = mongoose.model('user', userSchema);

module.exports = User;