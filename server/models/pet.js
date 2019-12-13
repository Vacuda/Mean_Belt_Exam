const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "You need to add a Pet Name"],
        minlength: [3, "Pet Name needs to be longer than 2 characters"]
    },

    type: { 
        type: String,
        required: [true, "You need to add a Pet Type"],
        minlength: [3, "Pet Type needs to be longer than 2 characters"]
    },  

    description: { 
        type: String,
        required: [true, "You need to add a Pet Description"],
        minlength: [3, "Pet Description needs to be longer than 2 characters"],
        maxlength: [50, "Pet Description needs to be shorter than 51 characters"]
    },

    skill_1: { 
        type: String,
        maxlength: [30, "Pet Skill needs to be shorter than 31 characters"]
    },  

    skill_2: { 
        type: String,
        maxlength: [30, "Pet Skill needs to be shorter than 31 characters"]
    },  

    skill_3: { 
        type: String,
        maxlength: [30, "Pet Skill needs to be shorter than 31 characters"]
    },

    likes: {
        type: Number,
        default: 0
    } 
 
}, {timestamps: true});

mongoose.model("Pet", PetSchema);