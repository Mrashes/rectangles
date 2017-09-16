//This currently works for just one instance
function saveToLocalStorage (name) {
    let canvas = document.getElementById('mycanvas');
    let html = canvas.innerHTML;
    return localStorage.setItem(name, html);
}

function restoreFromLocal (name) {
    let canvas = document.getElementById('mycanvas');
    canvas.innerHTML = localStorage.getItem(name);
    return canvas;
}

//This is me testing a profile interface
function getLocalProfiles () {
    let profiles = localStorage.getItem("rectangleProfile");
    return profiles.split(' ');
}

function profilePostLocal (newProfile) {
    let currentProfiles = localStorage.getItem("rectangleProfile");
    if (currentProfiles === null) {
        currentProfiles = newProfile
        localStorage.setItem('rectangleProfile', currentProfiles)
        return
    }
    else {
        currentProfiles += " " + newProfile
        localStorage.setItem('rectangleProfile', currentProfiles)
        return
    }
}

//This is a new form of adding something into rectangles

function localStorageManipulation (Profilename) {
    let profiles = {};

    let canvas = document.getElementById('mycanvas');
    let children = canvas.children.length;
    
    let html = canvas.innerHTML
    profiles.Profilename = html;

    return localStorage.setItem("rectangle"+Profilename, JSON.stringify(profiles));
}