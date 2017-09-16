function dblClick (e) {
  var target = e.target;
  if (target.className.baseVal === 'myrect') {
    colorChange(target)
  }
  else if (target.className.baseVal === 'remove') {
    removeSingleRectangle(target)
  }
}

function randomColor () {
  let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'aqua'];
  return colors[getRandomInt(0, colors.length)];
}

function colorChange (target) {
  color = randomColor();
  var rect= document.getElementById(target.id);
  rect.setAttribute('fill', color);
}

//This function adds new rectangle
function newRectangle () {
  let canvas = document.getElementById('mycanvas');
  let children = canvas.children.length

  return canvas.innerHTML += '<rect id="remove'+String(children/3)+'" class="remove" fill="orange" x="90" y="60" width="20" height="20" /> \n <rect id="rect'+String(children/3)+'" class="myrect" fill="black" x="100" y="70" width="100" height="100" /> \n <rect id="resize'+String(children/3)+'" class="resize" fill="red" x="190" y="160" width="20" height="20" />'
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
  document.getElementById(target.id).remove()
  document.getElementById("rect"+target.id[6]).remove()
  document.getElementById("resize"+target.id[6]).remove()
}

function removeAllRectangles () {
  let canvas = document.getElementById('mycanvas');
  return canvas.innerHTML = "";
}


//This dblclick doesn't work great.  maybe find another way of doing it.
document.addEventListener('dblclick', dblClick, false);