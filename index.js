var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];
var planetList = document.getElementById('selectbasic');
  for(var i = 0; i < planets.length; i++) {
    var opt = document.createElement('option');
    opt.value = planets[i].gravity;
    opt.innerHTML = planets[i].planet;
    planetList.appendChild(opt);
};
function calculateWeight() {

var weight = document.getElementById('textinput').value;

var selectIndex = document.getElementById('selectbasic').selectedIndex;

var planetGravity = planets[selectIndex].gravity;

var newWeight = weight * planetGravity;

var newElement = document.createElement("p");
newElement.innerHTML = "Your weight is " + newWeight;

document.getElementById('singlebutton').appendChild(newElement);
};