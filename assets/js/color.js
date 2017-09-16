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


//This dblclick doesn't work great.  maybe find another way of doing it.
document.addEventListener('dblclick', colorChange, false);