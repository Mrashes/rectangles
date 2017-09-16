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

//returns all profiles stored in the localstorage
function getLocalProfiles () {
    let profiles = localStorage.getItem("rectangleProfile");
    return profiles.split(' ');
}

//adding new profiles into the localstorage.  If there isn't one already the space is ommitted
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

//adding html into a rectangleProfilename local storage area

function localStorageManipulation (Profilename) {
    let profiles = {};

    let canvas = document.getElementById('mycanvas');
    let children = canvas.children.length;
    
    let html = canvas.innerHTML
    profiles.Profilename = html;

    return localStorage.setItem("rectangle"+Profilename, JSON.stringify(profiles));
}