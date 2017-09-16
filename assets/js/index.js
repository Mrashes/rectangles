function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

randomizeX = () => {
    //random number on canvas width
    let x = getRandomInt(10, 245)
    return x
}

randomizeY = () => {
    //This should be the canvas height
    let y = getRandomInt(10, 120)
    return y    
}

randomColor = () => {
    let colors = ['red', 'green', 'blue', 'yellow', 'purple']
    return colors[getRandomInt(0, colors.length)]
}


//This is the svg shape Resizer
document.addEventListener('mousedown', mousedown, false);

var mousedown_points;
function mousedown(e) {

    var target = e.target;
    // console.log(target)
    if (target.id === 'resize') {
        mousedown_points = {
            x: e.clientX,
            y: e.clientY
        }
        document.addEventListener('mouseup', mouseup, false);
        document.addEventListener('mousemove', mousemove, false);
    }
    else if (target.id === 'myrect') {
      mousedown_points = {
        x: e.clientX,
        y: e.clientY
    }
    document.addEventListener('mouseup', mouseupTranslate, false);
    document.addEventListener('mousemove', mousemoveTranslate, false);
    }
}

function mousemove(e) {
    var current_points = {
        x: e.clientX,
        y: e.clientY
    }

    var rect= document.getElementById('myrect');
    var w=parseFloat(rect.getAttribute('width'));
    var h=parseFloat(rect.getAttribute('height'));

    var dx=current_points.x-mousedown_points.x;
    var dy=current_points.y-mousedown_points.y;

    w+=dx;
    h+=dy;

    rect.setAttribute('width',w);
    rect.setAttribute('height',h);

    mousedown_points=current_points;

    updateResizeIcon(dx,dy);
}

mousemoveTranslate = (e) => {
    var current_points = {
        x: e.clientX,
        y: e.clientY
    }

    var rect= document.getElementById('myrect');
    var x=parseFloat(rect.getAttribute('x'));
    var y=parseFloat(rect.getAttribute('y'));

    var dx=current_points.x-mousedown_points.x;
    var dy=current_points.y-mousedown_points.y;

    x+=dx;
    y+=dy;

    rect.setAttribute('x',x);
    rect.setAttribute('y',y);

    mousedown_points=current_points;

    updateResizeIcon(dx,dy);
}



function updateResizeIcon(dx,dy){
    var resize= document.getElementById('resize');
    var x=parseFloat(resize.getAttribute('x'));
    var y=parseFloat(resize.getAttribute('y'));

    x+=dx;
    y+=dy;

    resize.setAttribute('x',x);
    resize.setAttribute('y',y);
}


function mouseup(e) {
  document.removeEventListener('mouseup', mouseup, false);
  document.removeEventListener('mousemove', mousemove, false);
}

function mouseupTranslate(e) {
  document.removeEventListener('mouseup', mouseupTranslate, false);
  document.removeEventListener('mousemove', mousemoveTranslate, false);
}



//blog post on html canvas https://simonsarris.com/making-html5-canvas-useful/
//Was useful but I have transitioned from canvas to svg