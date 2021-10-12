
// use jquery to *flip* the flashcard
$('#flashcard').on('click', function() {
    $('#title').fadeOut(500)
    $('#definition').fadeIn(500);
})

