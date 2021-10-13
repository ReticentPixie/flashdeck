// use jquery to *flip* the flashcard
$('#flashcard').click(() => {
    console.log('made it here')
    // if titleAttr is undefined then the title it visible
    if($('#title').attr('hidden') === undefined) {
      $('#title').fadeOut(1000).attr('hidden', true)
      $('#definition').fadeIn(1000).removeAttr('hidden')
    } else {
      $('#definition').fadeOut(1000).attr('hidden', true)
      $('#title').fadeIn(1000).removeAttr('hidden')
    }
})