// ========== Dependencies ==========
const mongoose = require(`mongoose`)

// ========== Shortcut Variable ==========
const Schema = mongoose.Schema

// ========== Define Schema ==========
const flashcardSchema = new Schema ({
    title: {type: String, required: true, unique: true},
    definition: {type: String, required: true},
    referenceURLs: {type: String, default: ''},
    tags: {type: String, default: ''},
    }, { timestamps: true}
);

// ========== Convert & Export Model ==========
module.exports = mongoose.model('Flashcard', flashcardSchema)