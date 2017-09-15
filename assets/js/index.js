function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

randomizeX = () => {
    let x = getRandomInt(10, 245)
    return x
}

randomizeY = () => {
    let y = getRandomInt(10, 120)
    console.log(y)
    return y    
}

randomColor = () => {
    let colors = ['red', 'green', 'blue', 'yellow', 'purple']
    return colors[getRandomInt(0, colors.length)]
}

createRectangle = () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    ctx.fillStyle = randomColor();
    ctx.fillRect(randomizeX(), randomizeY(), 10, 10);
    
    console.log('rectangled')
}
