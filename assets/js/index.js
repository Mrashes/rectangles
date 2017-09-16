function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
//Cause I always need it
function saveToLocalStorage (name) {
    let canvas = document.getElementById('mycanvas')
    let html = canvas.innerHTML
    return localStorage.setItem(name, html);
}

function restoreFromLocal (name) {
    let canvas = document.getElementById('mycanvas')
    canvas.innerHTML = localStorage.getItem(name)
    return canvas
}

//blog post on html canvas https://simonsarris.com/making-html5-canvas-useful/
//Was useful but I have transitioned from canvas to svg