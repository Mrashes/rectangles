dblClick = (e) => {
  var target = e.target;
  if (target.className.baseVal === 'myrect') {
    colorChange(target)
  }
  else if (target.className.baseVal === 'remove') {
    removeSingleRectangle(target)
  }
}

randomColor = () => {
  let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'aqua'];
  return colors[getRandomInt(0, colors.length)];
}

colorChange = (target) => {
  color = randomColor();
  var rect= document.getElementById(target.id);
  rect.setAttribute('fill', color);
}

//This function adds new rectangle
newRectangle = () => {
  let canvas = document.getElementById('mycanvas');
  let children = canvas.children.length

  return canvas.innerHTML += `<rect id="remove${children}" class="remove" fill="orange" x="90" y="60" width="20" height="20" />
  <rect id="rect${children}" class="myrect" fill="black" x="100" y="70" width="100" height="100" />
  <rect id="resize${children}" class="resize" fill="red" x="190" y="160" width="20" height="20" />`
}

//Stackoverflow answer for removeing by id  https://stackoverflow.com/questions/3387427/remove-element-by-id
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

removeSingleRectangle = (target) => {
  document.getElementById(target.id).remove()
  document.getElementById("rect"+target.id[6]).remove()
  document.getElementById("resize"+target.id[6]).remove()
}

removeAllRectangles = () => {
  let canvas = document.getElementById('mycanvas');
  return canvas.innerHTML = "";
}


//This dblclick doesn't work great.  maybe find another way of doing it.
document.addEventListener('dblclick', dblClick, false);