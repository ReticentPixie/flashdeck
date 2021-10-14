# FlashDeck
FlashDeck is a personalized study tool that mimics old school flashcards built for the modern age using the MEN stack. 

As an emerging engineer, a pen and paper simply hasn’t kept up with the many concepts and terms I learn each day. Creating my own study tool has provided a solution to managing my ever-growing concept/term bank. FlashDeck has also put my new coding skills into practice developing a practical, scaleable app that can adapt and grow to support learners of all types.

# Live App Available [Here](https://flashdeck-5000.herokuapp.com/)

# Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript
- jQuery
- HTML
- CSS
- [Hover CSS](https://ianlunn.github.io/Hover)
- [Font Awesome](https://fontawesome.com)

# Screenshot(s)

![FlashDeck Homepage](/public/images/FlashDeck-homepage.png)

![FlashDeck Sample Flashcard](/public/images/FlashDeck-flashcard-page.png)

# IceBox - Future Features
- Authentication - required to allow users to favorite/save cards to create personalized decks from the FlashDeck full list of study concepts
- Authorization - to implement administrator restrictions for card permanent deletion
- Search Functionality - to allow users to search for words/concepts by title and by tags
- Practice Mode - allow users to kick off a randomized quiz from either the full deck or their fav/starred selections


# Getting Started - To Create Your Own Copy of FlashDeck

### Pre-Reqs:
1. NodeJS installed - [Download & Instructions](https://nodejs.org/en/download/)
2. MongoDB - [Setup & Instructions](https://www.mongodb.com/try)
3. Text Editor - [VS Code](https://code.visualstudio.com/) is a top tier option

### Install Dependencies:
From the root of the cloned repository run "npm install" which will use the included package.json file to install all required dependencies. Currently required dependencies include:

| Dependency | Purpose |
| ------------------- | ---------------------- |
| [Express](https://expressjs.com/) | framework for Node.js |
| [mongoose](https://mongoosejs.com/) | object modeling for node.js |
| [dotenv](https://www.npmjs.com/package/dotenv) | loads environment variables from `.env` into `process.env` |
| [ejs](https://ejs.co/) | generate HTML markup with plain JavaScript; required for app views |
| [method-override](https://www.npmjs.com/package/method-override) | allows use of HTTP verbs PUT and DELETE |
| [Morgan](https://www.npmjs.com/package/morgan) | HTTP request logger middleware |

### Post Installation Steps

After installing all dependencies, create a `.env` file in the root of the repository and add the required environmental variables. Note - the keys are case sensitive and `.env` does not allow spaces or “”. Copy and paste the code block below exactly and replace <> with your local environment information. 
     
    PORT=<assign-a-local-port>     
    DATABASE_URL=<add-your-mongoDB-link-be-sure-to-update-password-in-your-link>

### Go Forth & Code!

Don't forget to come back and share the cool stuff you've done to make FlashDeck your own!