
const mongoose = require('mongoose'),

const artworkSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },

      artist: {
        type: String,
        required: true,
        trim: true
      },

      date: {
        type: String,
        required: true,
        trim: true
      },
    })

      module.exports = artworkSchema;