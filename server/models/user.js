
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must be at least 8 characters long"],
        select: false
    },
    avatar: {
        public_id: String, 
        url: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    tasks: [{
        title: "String",
        description: "String",
        conpleted: Boolean,
        createdAt: Date
    }],

    otp: Number,
    otp_expiry: Date,
})

export const User = mongoose.model('User', userSchema)