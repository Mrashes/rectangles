//This currently works for just one instance
function localSave (name) {
    let canvas = document.getElementById('mycanvas');
    let html = canvas.innerHTML;
    return localStorage.setItem(name, html);
}

function localRestoreFrom (name) {
    let canvas = document.getElementById('mycanvas');
    console.log(localStorage.getItem(name))
    canvas.innerHTML = localStorage.getItem(name);
    return canvas;
}

//returns all profiles stored in the localstorage
function localGetProfiles () {
    let profiles = localStorage.getItem("rectangleProfile");
    if (profiles === null) {
        console.log(Error)
        return
    }
    else {
        return profiles.split(' ');
    }

}

//adding new profiles into the localstorage.  If there isn't one already the space is ommitted
function localProfilePost (newProfile) {
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
function localManipulation (Profilename) {
    let canvas = document.getElementById('mycanvas');
    let children = canvas.children.length;
    let html = canvas.innerHTML
    return localStorage.setItem("rectangle"+Profilename, html);
}

function localLoadHTML (Profilename) {
    let canvas = document.getElementById('mycanvas');
    let html = localStorage.getItem("rectangle" + Profilename);
    canvas.innerHTML = html;
    return canvas;
}