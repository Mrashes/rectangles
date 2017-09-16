
//This is the svg shape Resizer and translator
document.addEventListener('mousedown', mousedown, false);

var mousedown_points;
function mousedown(e) {

    var target = e.target;
    console.log(target.className.baseVal)
    if (target.className.baseVal === 'resize') {
        mousedown_points = {
            x: e.clientX,
            y: e.clientY
        }
        document.addEventListener('mouseup', mouseup, false);
        document.addEventListener('mousemove', mousemove, false);
    }
    // else if (target.className.baseVal === 'myrect') {
    //   mousedown_points = {
    //     x: e.clientX,
    //     y: e.clientY
    // }
    // document.addEventListener('mouseup', mouseupTranslate, false);
    // document.addEventListener('mousemove', mousemoveTranslate, false);
    // }
}

function mousemove(e) {
    var current_points = {
        x: e.clientX,
        y: e.clientY
    }

    var target = e.target;

    if(target.id == 'mycanvas') {

    }

    else {
        var rect= document.getElementById("rect"+target.id-1);
        var w=parseFloat(rect.getAttribute('width'));
        var h=parseFloat(rect.getAttribute('height'));
    
        var dx=current_points.x-mousedown_points.x;
        var dy=current_points.y-mousedown_points.y;
    
        w+=dx;
        h+=dy;
    
        rect.setAttribute('width',w);
        rect.setAttribute('height',h);
    
        mousedown_points=current_points;
    
        updateResizeIcon(dx,dy,target);        
    }

}

function updateResizeIcon(dx,dy,target){
    var resize= document.getElementById(target.id);
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


// mousemoveTranslate = (e) => {
//     var current_points = {
//         x: e.clientX,
//         y: e.clientY
//     }

//     var rect= document.getElementById('myrect');
//     var x=parseFloat(rect.getAttribute('x'));
//     var y=parseFloat(rect.getAttribute('y'));

//     var dx=current_points.x-mousedown_points.x;
//     var dy=current_points.y-mousedown_points.y;

//     x+=dx;
//     y+=dy;

//     rect.setAttribute('x',x);
//     rect.setAttribute('y',y);

//     mousedown_points=current_points;

//     updateResizeIcon(dx,dy);
// }

// function mouseupTranslate(e) {
//   document.removeEventListener('mouseup', mouseupTranslate, false);
//   document.removeEventListener('mousemove', mousemoveTranslate, false);
// }