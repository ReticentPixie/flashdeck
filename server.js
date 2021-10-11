// =======================================
//              DEPENDENCIES
// =======================================
require(`dotenv`).config()                          // ----- enable .env -----
const express = require(`express`)                  // ----- require & initialize express -----
const app = express()
const mongoose = require(`mongoose`)                // ----- require mongoose for DB -----
const logger = require(`morgan`)                    // ----- require mogran to aid development -----
const methodOverride = require(`method-override`)   // ----- require method-override to allow delete & put routes -----


// =======================================
//              APPLICATION SETTINGS
// =======================================
const PORT = process.env.PORT || 3000


// =======================================
//              CONFIGURE DATABASE
// =======================================
const DATABASE_URL = process.env.DATABASE_URL
mongoose.connect(DATABASE_URL)
const db = mongoose.connection
// ---------- DB Connection Error/Success ----------
db.on(`connected`, () => console.log(`Connected to the ${db.name} database on port ${db.port}`))
db.on(`disconnected`, () => console.log(`Disconnected from MongoDB`))
db.on(`error`, (err) => console.log(`MongoDB has an error of: ${err.message}`))


// =======================================
//              MIDDLEWARE
// =======================================
app.use(logger(`dev`))                              // ----- mount morgan middleware to aid development -----
app.use(express.static(`public`))                   // ----- mount static to access static files such as css and images -----
app.use(express.urlencoded({ extended: false }))    // ----- mount urlencoded to convert form data into req.body object -----
app.use(methodOverride(`_method`))                  // ----- mount method-override to allow delete & put routes -----



// =======================================
//              CONTROLLERS
// =======================================
app.get(`/`, (req, res) => {
    res.send(`hello world`)
})


// =======================================
//              LISTENER
// =======================================
app.listen(PORT, (req, res) => {
    console.log(`Express listening on port: ${PORT}`)
})