//returns all profiles stored in the localstorage
function localGetProfiles () {
    let profiles = localStorage.getItem("rectangleProfile");
    if (profiles === null || profiles === [""]) {
        console.log(Error)
        return
    }
    else {
        return profiles.split(' ');
    }

}

//adding new profiles into the localstorage.  If there isn't one already the space is ommitted
function localProfilePost (newProfile) {
    let currentProfiles = localGetProfiles();

    if (currentProfiles === null || currentProfiles === [""] || currentProfiles === undefined) {
        currentProfiles = newProfile
        localStorage.setItem('rectangleProfile', currentProfiles)
        return;
    }
    else if (currentProfiles.indexOf(newProfile) !== -1) {
        noDoubles(currentProfiles, newProfile);
        return;
    }
    else {
        currentProfiles.push(newProfile);
        localStorage.setItem('rectangleProfile', currentProfiles.join(' '));
        return;
    }
}

function noDoubles (currentProfiles, newProfile) {
    let index = currentProfiles.indexOf(newProfile);
    currentProfiles.push(newProfile+"Other");
    localStorage.setItem('rectangleProfile', currentProfiles.join(' '));
    return;
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