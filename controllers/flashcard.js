// ========== Dependencies ==========
const express = require(`express`)
const Flashcard = require(`../models/flashcards`)


// ========== Initialize Express Router ==========
const Router = express.Router()


// =======================================
//              SEED
//      Remember to remove this later
// =======================================
const flashcardSeed = require(`../models/flashcardSeed`)

Router.get(`/seed`, (req, res) => {
    // clear the database
    Flashcard.deleteMany({}, (err, allFlashcards) => {})

    // seed the database with the data in the flashcardSeed.js model
    Flashcard.create(flashcardSeed, (err, data) => {
        // redirect to flashcard index route
        res.redirect(`/flashcards`)
    })
})

// =======================================
//              ROUTES
//       Follow - I.N.D.U.C.E.S.
// =======================================

// ----- INDEX Route -----
Router.get(`/`, (req, res) => {
    Flashcard.find({}, (err, foundFlashcards) => {
        res.render(`../views/flashcards/index.ejs`, {
            flashcards: foundFlashcards,
        })
    })
})

// ----- NEW Route -----
// ----- DELETE Route -----
// ----- UPDATE Route -----
// ----- CREATE Route -----
// ----- EDIT Route -----
// ----- SHOW Route -----

// ========== Export the Router ==========
module.exports = Router