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
    let currentProfiles = localGetProfiles();

    // console.log(currentProfiles)

    if (currentProfiles === null || currentProfiles === [""]) {
        currentProfiles = newProfile
        localStorage.setItem('rectangleProfile', currentProfiles[0])
        return
    }
    else if (currentProfiles.indexOf(newProfile) !== -1) {
        currentProfiles.push(newProfile+"Other") 
        localStorage.setItem('rectangleProfile', currentProfiles.join(' '))
        return
        // console.log(currentProfiles)
        // let doubles = currentProfiles
        // noDoubles(doubles, newProfile)
        // return
    }
    else {
        currentProfiles.push(newProfile) 
        localStorage.setItem('rectangleProfile', currentProfiles.join(' '))
        return
    }
}

// function noDoubles (currentProfiles, newProfile) {
//     let index = currentProfiles.indexOf(newProfile);
//     var other = currentProfiles[index].substr(currentProfiles[index].length - 5);
//     if (other === "Other") {
//         localStorage.setItem('rectangleProfile', currentProfiles.join(' '))
//         console.log('hit this')
//         return
//     }
//     else {
//         currentProfiles.push(newProfile+"Other")
//         // console.log(newProfile+"Other")
//         return noDoubles(currentProfiles, newProfile+"Other")
//     }
// }

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