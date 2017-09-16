randomColor = () => {
    let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'aqua'];
    return colors[getRandomInt(0, colors.length)];
}

colorChange = (e) => {
  var target = e.target;
  if (target.className.baseVal === 'myrect') {
    color = randomColor();
    var rect= document.getElementById(target.id);
    rect.setAttribute('fill', color);
  }
}

//This function adds new rectangle
newRectangle = () => {
  let canvas = document.getElementById('mycanvas');
  let children = canvas.children.length

  return canvas.innerHTML += `<rect id="rect${children}" class="myrect" fill="black" x="100" y="70" width="100" height="100" />
  <rect id="resize${children}" class="resize" fill="red" x="190" y="160" width="20" height="20" />`
}


removeAllRectangles = () => {
  let canvas = document.getElementById('mycanvas');
  return canvas.innerHTML = "";
}


//This dblclick doesn't work great.  maybe find another way of doing it.
document.addEventListener('dblclick', colorChange, false);