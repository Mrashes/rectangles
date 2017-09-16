//This function replaces the old rectangle after clearing

newRectangle = () => {
    let canvas = document.getElementById('mycanvas');
    let children = canvas.children.length

    return canvas.innerHTML += `<rect id="rect${Math.floor(children/3)}" class="myrect" fill="black" x="100" y="70" width="100" height="100" />
    <rect id="rect${Math.floor(children/3)}" class="resize" fill="red" x="190" y="160" width="20" height="20" />`
  }
  
  
  removeAllRectangles = () => {
    let canvas = document.getElementById('mycanvas');
    return canvas.innerHTML = "";
  }