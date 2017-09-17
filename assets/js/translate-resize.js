//This is the svg shape Resizer and translator
document.addEventListener('mousedown', mousedown, false);

var mousedown_points;
//On mouse down check what the mouse down is on
function mousedown (e) {

    window.target = e.target;
    if (target.className.baseVal === 'resize') {
        mousedown_points = {
            x: e.clientX,
            y: e.clientY
        }
        document.addEventListener('mouseup', mouseup, false);
        document.addEventListener('mousemove', mousemove, false);
    }
    else if (target.className.baseVal === 'myrect') {
      mousedown_points = {
        x: e.clientX,
        y: e.clientY
    }
    document.addEventListener('mouseup', mouseupTranslate, false);
    document.addEventListener('mousemove', mousemoveTranslate, false);
    }
}

//when you move the mouse on resize transform the main rectangle based on movement
function mousemove (e) {
    var current_points = {
        x: e.clientX,
        y: e.clientY
    }
    // console.log("rect"+String(parseInt(window.target.id)-parseInt(1)))

    var rect= document.getElementById("rect"+window.target.id[6]);
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

//The Resize icon doesn't transform but translates so change the positioning
function updateResizeIcon (dx,dy){
    var resize= document.getElementById(window.target.id);
    var x=parseFloat(resize.getAttribute('cx'));
    var y=parseFloat(resize.getAttribute('cy'));

    x+=dx;
    y+=dy;

    resize.setAttribute('cx',x);
    resize.setAttribute('cy',y);
}

//When you lift up on the mouse remove the listeners for mouse movement
function mouseup (e) {
    localManipulation(document.getElementById('currentProfile').textContent);
    document.removeEventListener('mouseup', mouseup, false);
    document.removeEventListener('mousemove', mousemove, false);
}

//These are the same but translating only
function mousemoveTranslate (e) {
    var current_points = {
        x: e.clientX,
        y: e.clientY
    }

    var rect= document.getElementById(window.target.id);
    var x=parseFloat(rect.getAttribute('x'));
    var y=parseFloat(rect.getAttribute('y'));

    var dx=current_points.x-mousedown_points.x;
    var dy=current_points.y-mousedown_points.y;

    x+=dx;
    y+=dy;

    // if (x<0 || y<0) {}

    rect.setAttribute('x',x);
    rect.setAttribute('y',y);

    mousedown_points=current_points;

    updateResizeIconTranslate(dx,dy);
}

function updateResizeIconTranslate (dx,dy){
    var resize= document.getElementById("resize"+window.target.id[4]);
    var x=parseFloat(resize.getAttribute('cx'));
    var y=parseFloat(resize.getAttribute('cy'));

    x+=dx;
    y+=dy;

    resize.setAttribute('cx',x);
    resize.setAttribute('cy',y);

    updateRemoveIconTranslate(dx,dy)
}

function updateRemoveIconTranslate (dx,dy) {
    var remove= document.getElementById("remove"+window.target.id[4]);
    var x=parseFloat(remove.getAttribute('cx'));
    var y=parseFloat(remove.getAttribute('cy'));

    x+=dx;
    y+=dy;

    remove.setAttribute('cx',x);
    remove.setAttribute('cy',y);
}

function mouseupTranslate (e) {
    localManipulation(document.getElementById('currentProfile').textContent);
    document.removeEventListener('mouseup', mouseupTranslate, false);
    document.removeEventListener('mousemove', mousemoveTranslate, false);
}
