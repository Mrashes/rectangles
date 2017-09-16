function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

randomizeX = () => {
    //random number on canvas width
    let x = getRandomInt(10, 245);
    return x;
}

randomizeY = () => {
    //This should be the canvas height
    let y = getRandomInt(10, 120);
    return y;
}


//blog post on html canvas https://simonsarris.com/making-html5-canvas-useful/
//Was useful but I have transitioned from canvas to svg