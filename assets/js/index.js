function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
//Cause I always need it


//blog post on html canvas https://simonsarris.com/making-html5-canvas-useful/
//Was useful but I have transitioned from canvas to svg