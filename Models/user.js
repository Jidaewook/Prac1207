const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const userSchema = new mongoose.Schema({
    method: {
        type: String,
        enum: ['local', 'google', 'facebook'],
        required: true
    },

    local: {
        name: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String
        },
        avatar: {
            type: String
        }
    },
    google: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        },
        avatar: {
            type: String
        }
    },
    facebook: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        },
        avatar: {
            type: String
        }
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre("save", async function (next) {
    try {

        console.log('entered');
        if (this.method !== 'local') {
            next();
        }

        const avatar = await gravatar.url(this.local.email, {
            s: '200', // size
            r: 'pg',  // Rating
            d: 'mm'   // Default
        });
        this.local.avatar = avatar;

        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Generate a password hash (salt + hash)
        const passwordHash = await bcrypt.hash(this.local.password, salt);
        // Re-assign hashed version over original, plain text password
        this.local.password = passwordHash;
        console.log('exited');
        next();

    } catch (error) {
        next(error)
    }
});


module.exports = mongoose.model("user", userSchema);