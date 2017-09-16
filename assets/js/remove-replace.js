//This function replaces the old rectangle after clearing

newRectangle = () => {
    //stolen from https://stackoverflow.com/questions/20539196/creating-svg-elements-dynamically-with-javascript-inside-html
    // var svg   = document.documentElement;
    // var svgNS = svg.namespaceURI;
    // var myrect = document.createElementNS(svgNS,'rect')
  
  
    // //My work
    // //Why you no work?!? It doesn't look the same as the other one  aka has a closing tag
    // let canvas = document.getElementById('mycanvas');
    // var myrect = document.createElement('rect');
    // myrect.setAttribute("fill","black");
    // myrect.setAttribute("x","100");
    // myrect.setAttribute("y","70");
    // myrect.setAttribute("width","100");
    // myrect.setAttribute("height","100");
    // canvas.appendChild(myrect)
  
    let canvas = document.getElementById('mycanvas');
    let children = canvas.children.length

    return canvas.innerHTML += `<rect id="rect${children}" class="myrect" fill="black" x="100" y="70" width="100" height="100" />
    <rect id="rect${children+1}" class="resize" fill="red" x="190" y="160" width="20" height="20" />`
  }
  
  
  removeAllRectangles = () => {
    let canvas = document.getElementById('mycanvas');
    return canvas.innerHTML = "";
  }