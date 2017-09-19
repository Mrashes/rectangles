// //Also a legacy function from before I added in color sliders
//This is a random color generator to place hold until I implement that color slider idea
function randomColor () {
    // let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'aqua'];
    let colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LawnGreen","LemonChiffon","Lime","LimeGreen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","Yellow","YellowGreen"];
    
    return colors[getRandomInt(0, colors.length)];
  }


//Change the fill of a color based on random color
function colorChange (target) {
    color = randomColor();
    var rect= document.getElementById(target.id);
    rect.setAttribute('fill', color);
}

function handleTargetColor (event) {
    if (window.targetColor === undefined) {
        window.targetColor = event.target;
        document.getElementById(targetColor.id).setAttribute('rx', 10);
        document.getElementById('colorSelector').style.display = 'block';
        return;
    }
    else {
        document.getElementById(targetColor.id).setAttribute('rx', 0);
        window.targetColor = event.target;
        document.getElementById(targetColor.id).setAttribute('rx', 10);
        return;
    }
}

function showColorChange() {
    document.getElementById(targetColor.id).style.display = 'block';
}

// for reference, I yonked this from https://codepen.io/leemark/pen/lpEHr

var r = document.querySelector('#r'),
g = document.querySelector('#g'),
b = document.querySelector('#b'),
r_out = document.querySelector('#r_out'),
g_out = document.querySelector('#g_out'),
b_out = document.querySelector('#b_out');

function setColor(){
    var r_hex = parseInt(r.value, 10).toString(16),
    g_hex = parseInt(g.value, 10).toString(16),
    b_hex = parseInt(b.value, 10).toString(16),
    hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
    document.getElementById(targetColor.id).setAttribute('fill', hex); 
}

function pad(n){
    return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
    setColor();
    r_out.value = r.value;
}, false);

r.addEventListener('input', function() {
    setColor();
    r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
    setColor();
    g_out.value = g.value;
}, false);

g.addEventListener('input', function() {
    setColor();
    g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
    setColor();
    b_out.value = b.value;
}, false);

b.addEventListener('input', function() {
    setColor();
    b_out.value = b.value;
}, false);