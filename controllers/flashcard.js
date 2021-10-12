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
router.get(`/`, async(req, res) => {
    const flashcards = await Flashcard.find({}).sort({title: 1})
    res.render(`flashcards/index.ejs`, {flashcards, pageTitle: `INDEX`})
})

// ----- NEW Route -----
router.get(`/new`, (req, res) => {
    res.render(`flashcards/new.ejs`, {pageTitle: `NEW`})
})

// ----- DELETE Route -----
router.delete(`/:id`, async(req, res) => {
    await Flashcard.findByIdAndRemove(req.params.id)
    res.redirect(`/flashcards`)
})

// ----- UPDATE Route -----
router.put(`/:id`, async(req, res) => {
    await Flashcard.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.redirect(`/flashcards/${req.params.id}`)
})

// ----- CREATE Route -----
router.post(`/`, async(req, res) => {
    await Flashcard.create(req.body)
    res.redirect(`/flashcards`)
})

// ----- EDIT Route -----
router.get(`/:id/edit`, async(req, res) => {
    const flashcard = await Flashcard.findById(req.params.id)
    res.render(`flashcards/edit.ejs`, {flashcard, pageTitle: `EDIT`})
})

// ----- SHOW Route -----
router.get(`/:id`, async(req, res) => {
    const flashcard = await Flashcard.findById(req.params.id)
 
    if (flashcard.tags === '') {
        tags = 'empty'
    } else {
        tags = flashcard.tags.split(', ')
    }
    if (flashcard.referenceURLs === '') {
        urls = 'empty'
    } else {
        urls = flashcard.referenceURLs.split(', ')
    }
    res.render(`flashcards/show.ejs`, {flashcard, tags, urls, pageTitle: `Flashcard`})
})


// ========== Export the Router ==========
module.exports = router