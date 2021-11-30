import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    minlength: [3, "required minimum 20 characters in username"],
    maxlength: [20, "maximum 20 characters are allowed in an username"],
    unique: [true, "username already exists"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [5, "password should have minimum 6 characters"],
  },
});

// setting up middleware to hash password
UserSchema.pre("save", async function (next){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})
   
const User = mongoose.model("user", UserSchema)

export default User;