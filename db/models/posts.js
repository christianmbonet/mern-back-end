
const mongoose = require('mongoose'),

const postSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },

      description: {
        type: String,
        required: true,
        trim: true
      },

      date: {
        type: Date,
        required: true,
        default: Date.now
      },
    })

      module.exports = postSchema;