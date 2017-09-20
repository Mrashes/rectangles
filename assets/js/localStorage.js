//returns all profiles stored in the localstorage
function localGetProfiles () {
    let profiles
    try {
        profiles = localStorage.getItem("rectangleProfile")
    } catch (e) {
        console.log(e)
        profiles = null;
    }
    
    if (profiles === null || profiles === [""]) {
        console.log(Error)
        return profiles
    }
    else {
        return profiles.split(' ');
    }

}

//adding new profiles into the localstorage.  If there isn't one already the space is ommitted
function localProfilePost (newProfile) {
    let currentProfiles;
    try{currentProfiles = localGetProfiles();} catch(e) {currentProfiles = [""]; console.log(e)}

    if (currentProfiles === null || currentProfiles === [""] || currentProfiles === undefined) {
        currentProfiles = newProfile
        try {
            localStorage.setItem('rectangleProfile', currentProfiles)
        } catch (e) {
            console.log(e)
        }
        
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

//If a profile name is reused add a random number to it
function noDoubles (currentProfiles, newProfile) {
    let index = currentProfiles.indexOf(newProfile);
    let counter = localStorage.getItem('counter')
    if (counter === null) {
        counter = 0
      }
    currentProfiles.push(newProfile+counter);
    //turn counter into int
    let intCounter = parseInt(counter)
    intCounter += 1
    localStorage.setItem('counter', intCounter)
    localStorage.setItem('rectangleProfile', currentProfiles.join(' '));
    return;
}

//adding html into a rectangleProfilename local storage area
function localManipulation (Profilename) {
    let canvas = document.getElementById('mycanvas');
    let html = canvas.innerHTML
    try {localStorage.setItem("rectangle"+Profilename, html);} catch(e) {console.log(e)}
    return
}

function localLoadHTML (Profilename) {
    let canvas = document.getElementById('mycanvas');
    let html = localStorage.getItem("rectangle" + Profilename);
    canvas.innerHTML = html;
    return canvas;
}