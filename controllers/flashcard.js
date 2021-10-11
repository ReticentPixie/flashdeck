// ========== Dependencies ==========
const express = require(`express`)
const Flashcard = require(`../models/flashcards`)


// ========== Initialize Express Router ==========
const router = express.Router()


// =======================================
//              SEED
//      Remember to remove this later
// =======================================
const flashcardSeed = require(`../models/flashcardSeed`)

router.get(`/seed`, (req, res) => {
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
router.get(`/`, (req, res) => {
    Flashcard.find({}, (err, foundFlashcards) => {
        res.render(`../views/flashcards/index.ejs`, {
            flashcards: foundFlashcards,
        })
    })
})

// ----- NEW Route -----
router.get(`/new`, (req, res) => {
    res.render(`../views/flashcards/new.ejs`)
})

// ----- DELETE Route -----
router.delete(`/:id`, (req, res) => {
    Flashcard.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect(`/flashcards`)
    })
})

// ----- UPDATE Route -----

// ----- CREATE Route -----
router.post(`/`, (req, res) => {
    Flashcard.create(req.body, (err, createdFlashcard) => {
        console.log(createdFlashcard)
        res.redirect(`/flashcards`)
    })
})


// ----- EDIT Route -----

// ----- SHOW Route -----
router.get(`/:id`, (req, res) => {
    Flashcard.findById(req.params.id, (err, foundFlashcard) => {
        res.render(`../views/flashcards/show.ejs`, {
            flashcard: foundFlashcard,
            tags: foundFlashcard.tags.split(', '),
            urls: foundFlashcard.referenceURLs.split(', '),
        })
    })
})

// ========== Export the Router ==========
module.exports = router