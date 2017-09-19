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


//This function adds new rectangle to the canvas
function newRectangle () {
  let canvas = document.getElementById('mycanvas');
  //I use to use the number of children at the indicator but have to switch to a global counter for bug reasons
  // let children = String(canvas.children.length/3)
  let counter
  try {counter = localStorage.getItem("counter")} catch(e){counter = null; console.log(e)} 
  if (counter === null) {
    counter = 0
  }
  else {}
  canvas.innerHTML += '<circle id="remove'+counter+'" class="remove" fill="#A09DA1" cx="100" cy="70" r="10"/> \n <rect id="rect'+counter+'" class="myrect" fill="#000000" x="100" y="70" width="100" height="100" /> \n <circle id="resize'+counter+'" class="resize" fill="#F5805D" cx="200" cy="170" r="10"/>';
  let intCounter = parseInt(counter)
  intCounter += 1
  try {localStorage.setItem('counter', intCounter)} catch (e) {
    console.log(e)
  }
  
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
  document.getElementById("rect"+target.id.slice(6)).remove();
  document.getElementById("resize"+target.id.slice(6)).remove();
  return localManipulation(document.getElementById('currentProfile').textContent);
}

function removeAllRectangles () {
  let canvas = document.getElementById('mycanvas');
  canvas.innerHTML = "";
  return localManipulation(document.getElementById('currentProfile').textContent)
}


//This dblclick doesn't work great.  maybe find another way of doing it.
document.addEventListener('dblclick', dblClick, false);