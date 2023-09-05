const mongoose = require('mongoose') //to interact with mongodb

const userSchema = mongoose.Schema(
    {
      user:{
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
      },
      name: {
        type: String,
        required: [true, 'Please add a name'],
      },
      email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
      },
      password: {
        type: String,
        required: [true, 'Please add a password'],
      },
    },
    {
      timestamps: true,//this will give us created and updated app
    }
  )
  
  module.exports = mongoose.model('User', userSchema)