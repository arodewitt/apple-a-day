window.onload = function() {

// selects elements to change
  var page = document.getElementsByTagName('body');
  var hasTheme = document.getElementsByClassName('recolor');

// holds themes and chooses one at random
  var colorTheme = ['minted', 'dour-melon'];
  var themeL = colorTheme.length;
  var randomTheme = Math.floor(Math.random() * (themeL + 0));

// pushes a random color theme to the page
  page[0].classList.add(colorTheme[randomTheme]);
  for (i = 0; i < hasTheme.length; i++) {
    page[0].classList.add(colorTheme[randomTheme]);
  }

// logs selection
  console.log(randomTheme);
}
