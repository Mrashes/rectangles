//On double click, have 2 cases one for a double click on main rectangle (color) and on remove (remove)
function dblClick (e) {
  var target = e.target;
  if (target.className.baseVal === 'myrect') {
    colorChange(target)
  }
  else if (target.className.baseVal === 'remove') {
    removeSingleRectangle(target)
  }
}

//This is a random color generator to place hold until I implement that color slider idea
function randomColor () {
  let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'aqua'];
  return colors[getRandomInt(0, colors.length)];
}

//Change the fill of a color based on random color
function colorChange (target) {
  color = randomColor();
  var rect= document.getElementById(target.id);
  rect.setAttribute('fill', color);
}

//This function adds new rectangle to the canvas
function newRectangle () {
  let canvas = document.getElementById('mycanvas');
  let children = canvas.children.length
  canvas.innerHTML += '<circle id="remove'+String(children/3)+'" class="remove" fill="#A09DA1" cx="100" cy="70" r="10"/> \n <rect id="rect'+String(children/3)+'" class="myrect" fill="black" x="100" y="70" width="100" height="100" /> \n <circle id="resize'+String(children/3)+'" class="resize" fill="#F5805D" cx="200" cy="170" r="10"/>'
  return localManipulation(document.getElementById('currentProfile').textContent)
}

//Stackoverflow answer for removing by id  https://stackoverflow.com/questions/3387427/remove-element-by-id
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function removeSingleRectangle (target) {
  document.getElementById(target.id).remove();
  document.getElementById("rect"+target.id[6]).remove();
  document.getElementById("resize"+target.id[6]).remove();
  return localManipulation(document.getElementById('currentProfile').textContent);
}

function removeAllRectangles () {
  let canvas = document.getElementById('mycanvas');
  canvas.innerHTML = "";
  return localManipulation(document.getElementById('currentProfile').textContent)
}


//This dblclick doesn't work great.  maybe find another way of doing it.
document.addEventListener('dblclick', dblClick, false);