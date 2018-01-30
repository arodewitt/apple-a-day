var quoteDiv = document.getElementById('lyric_container-quote');
var infoDiv = document.getElementById('lyric_container-info');
// gets json array
var requestURL = '/data/song-info.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var songLyric = request.response;
  populateText(songLyric);
}

// uses populateText to write content from json
function populateText(jsonObj) {
  var myH1 = document.createElement('h1');
  var myH2a = document.createElement('h2');
  var myH2b = document.createElement('h2');
  var myH2c = document.createElement('h2');

// gets max-value for random array entry
  var l = jsonObj.songs.length;

// creates variable based on randomly selected array entry and logs selection
  var r = Math.floor(Math.random() * (l + 0));
  console.log(r);

// prints content of randomly selected entry
  myH1.textContent = jsonObj.songs[r].quote;
  myH2a.textContent = jsonObj.songs[r].song;
  myH2b.textContent = jsonObj.songs[r].album;
  myH2c.textContent = jsonObj.songs[r].year;

  quoteDiv.appendChild(myH1);
  infoDiv.appendChild(myH2a);
  infoDiv.appendChild(myH2b);
  infoDiv.appendChild(myH2c);
}
