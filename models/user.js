var mongoose = require('mongoose');

var Userslist = mongoose.model('Userslist', {
  email: {
    type: String,
    required: true,
    minlenght: 1,
    trim: true //ignores white spaces
  }
});
module.exports = {Userslist};
