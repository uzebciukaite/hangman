const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    useremail: {
        type: String,
        required: true
    },
    userpass: {
        type: String,
        required: true
    },
    userimage: {
        type: String,
        required: true
    },
    userpoints: {
        type: Number,
        required: false,
        default: 0
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User
