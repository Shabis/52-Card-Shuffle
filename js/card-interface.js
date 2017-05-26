function shuffle(array) {
  var generatedIndex = 0;
  var outcome = [];
  for (var i = array.length - 1; i >= 0; i--) {
    generatedIndex = Math.floor(Math.random() * (i + 1));
    outcome.push(array[generatedIndex]);
    array.splice(generatedIndex, 1);
  }
  return outcome;
}

$(document).ready(function() {
  $(".shuffle-button").click(function() {
    $("#results").empty();
    var deck = ['<img src="images/ace_of_hearts.png">', '<img src="images/king_of_hearts.png">', '<img src="images/queen_of_hearts.png">', '<img src="images/jack_of_hearts.png">', '<img src="images/10_of_hearts.png">', '<img src="images/9_of_hearts.png">', '<img src="images/8_of_hearts.png">', '<img src="images/7_of_hearts.png">', '<img src="images/6_of_hearts.png">', '<img src="images/5_of_hearts.png">', '<img src="images/4_of_hearts.png">', '<img src="images/3_of_hearts.png">', '<img src="images/2_of_hearts.png">', '<img src="images/ace_of_spades.png">', '<img src="images/king_of_spades.png">', '<img src="images/queen_of_spades.png">', '<img src="images/jack_of_spades.png">', '<img src="images/10_of_spades.png">', '<img src="images/9_of_spades.png">', '<img src="images/8_of_spades.png">', '<img src="images/7_of_spades.png">', '<img src="images/6_of_spades.png">', '<img src="images/5_of_spades.png">', '<img src="images/4_of_spades.png">', '<img src="images/3_of_spades.png">', '<img src="images/2_of_spades.png">', '<img src="images/ace_of_diamonds.png">', '<img src="images/king_of_diamonds.png">', '<img src="images/queen_of_diamonds.png">', '<img src="images/jack_of_diamonds.png">', '<img src="images/10_of_diamonds.png">', '<img src="images/9_of_diamonds.png">', '<img src="images/8_of_diamonds.png">', '<img src="images/7_of_diamonds.png">', '<img src="images/6_of_diamonds.png">', '<img src="images/5_of_diamonds.png">', '<img src="images/4_of_diamonds.png">', '<img src="images/3_of_diamonds.png">', '<img src="images/2_of_diamonds.png">', '<img src="images/ace_of_clubs.png">', '<img src="images/king_of_clubs.png">', '<img src="images/queen_of_clubs.png">', '<img src="images/jack_of_clubs.png">', '<img src="images/10_of_clubs.png">', '<img src="images/9_of_clubs.png">', '<img src="images/8_of_clubs.png">', '<img src="images/7_of_clubs.png">', '<img src="images/6_of_clubs.png">', '<img src="images/5_of_clubs.png">', '<img src="images/4_of_clubs.png">', '<img src="images/3_of_clubs.png">', '<img src="images/2_of_clubs.png">'];
    $(".card-backs").hide();
    $(".ordered-cards").hide();
    $("#results").show();
    var randomDeck = shuffle(deck);
    $('#results').append(randomDeck);
  });
  // $(".sort-button").click(function() {
  //   $(".card-backs").hide();
  //   $("#results").hide();
  //   $(".ordered-cards").show();
  // });




  $(".sort-button").click(function() {
    $(".card-backs").hide();
    $("#results").hide();
    $(".ordered-cards").show();
  });
});
