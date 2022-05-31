'use strict';
/**grabs the value from the movie form and the rating form
 * returns them as an list item in the DOM
 */
function storeNewMovies() {
  let movie = $('.movie-form').eq(0).val();
  let score = $('.movie-form').eq(1).val();
  let removeBtn = $('<button>').text("Remove").attr('class', 'remove-btn');
  let newMovie = $('<li>').text(`Title: ${movie} Rating: ${score}`);
  removeBtn.on('click', deleteBtn);
  newMovie.append(removeBtn);
  $('ul').append(newMovie);
}

/**looks at the parent item of the button and deletes it using jQuery methods */
function deleteBtn(){
  $(this).parent().remove();
}
//reconsider name

$('.rating').on('submit', storeNewMovies);


if(movie.length > 2 || score > 10) {
  throw $('ul').append($('<li>').text("invalid"))
}

//use form in html
//storeNewMovies could be broken down into more functions