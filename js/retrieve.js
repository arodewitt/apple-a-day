var container = document.getElementById('lyric_container');
var requestURL = '/data/song-info.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var songLyric = request.response;
  populateText(songLyric);
}

function populateText(jsonObj) {
  var myH1 = document.createElement('h1');
  var myH2a = document.createElement('h2');
  var myH2b = document.createElement('h2');
  var myH2c = document.createElement('h2');

  myH1.textContent = jsonObj.songs[0].quote;
  myH2a.textContent = jsonObj.songs[0].song;
  myH2b.textContent = jsonObj.songs[0].album;
  myH2c.textContent = jsonObj.songs[0].year;

  container.appendChild(myH1);
  container.appendChild(myH2a);
  container.appendChild(myH2b);
  container.appendChild(myH2c);
}