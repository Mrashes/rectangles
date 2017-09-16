//This is the svg shape Resizer and translator
document.addEventListener('mousedown', mousedown, false);

var mousedown_points;
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

function updateResizeIcon (dx,dy){
    var resize= document.getElementById(window.target.id);
    var x=parseFloat(resize.getAttribute('x'));
    var y=parseFloat(resize.getAttribute('y'));

    x+=dx;
    y+=dy;

    resize.setAttribute('x',x);
    resize.setAttribute('y',y);
}

function mouseup (e) {
    localManipulation(document.getElementById('currentProfile').textContent);
    document.removeEventListener('mouseup', mouseup, false);
    document.removeEventListener('mousemove', mousemove, false);
}


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

    rect.setAttribute('x',x);
    rect.setAttribute('y',y);

    mousedown_points=current_points;

    updateResizeIconTranslate(dx,dy);
}

function updateResizeIconTranslate (dx,dy){
    var resize= document.getElementById("resize"+window.target.id[4]);
    var x=parseFloat(resize.getAttribute('x'));
    var y=parseFloat(resize.getAttribute('y'));

    x+=dx;
    y+=dy;

    resize.setAttribute('x',x);
    resize.setAttribute('y',y);

    updateRemoveIconTranslate(dx,dy)
}

function updateRemoveIconTranslate (dx,dy) {
    var remove= document.getElementById("remove"+window.target.id[4]);
    var x=parseFloat(remove.getAttribute('x'));
    var y=parseFloat(remove.getAttribute('y'));

    x+=dx;
    y+=dy;

    remove.setAttribute('x',x);
    remove.setAttribute('y',y);
}

function mouseupTranslate (e) {
    localManipulation(document.getElementById('currentProfile').textContent);
    document.removeEventListener('mouseup', mouseupTranslate, false);
    document.removeEventListener('mousemove', mousemoveTranslate, false);
}
