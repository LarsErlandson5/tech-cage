const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, minlength: 6, required: true },
  timeStamp: { type: Date, timeStamp: true, default: Date },
  loginTime: { type: Date, timeStamp: true },
  profileImage: { type: String, default: 'src/client/components/images/cloneold.png' }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id, firstName: this.firstName, email: this.email, profileImage: this.profileImage }, process.env.REACT_APP_JWT_SECRET);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
