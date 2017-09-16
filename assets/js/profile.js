function readForm () {
    let inputValue = document.getElementById("profileInput").value;
    document.getElementById('currentProfile').textContent = inputValue;
    clearInput();
    localProfilePost(inputValue);
    localManipulation(inputValue);
    populateProfiles()
    return inputValue;
}

function clearInput () {
    document.getElementById("profileInput").value = "";
    return;
}

function populateProfiles () {
    localProfiles = localGetProfiles();
    let profileDOM = document.getElementById('profileList');
    profileDOM.innerHTML = "";
    for (i=0; i<localProfiles.length; i++) {
        //makes p tags with names of profiles
        var element = document.createElement('p');
        element.textContent = localProfiles[i];
        element.id = localProfiles[i];
        // element.className = 'example';
        profileDOM.appendChild(element);

        var removeButton = document.createElement('button');
        removeButton.textContent = "remove "+localProfiles[i];
        removeButton.id = "remove"+localProfiles[i];
        profileDOM.appendChild(removeButton);
    };
    return;
}

function setCurrentProfile (targetID) {
    document.getElementById('currentProfile').textContent = targetID;
}

function profileEvents (event) {
    
    if (event.target.tagName == "BUTTON") {
        // console.log(event.target.id.split('remove')[1])
        removeProfile(event.target.id.split('remove')[1]);
        return;
    }
    else if (event.target.tagName == "P"){
        let targetID = event.target.id;
        localLoadHTML(targetID);
        setCurrentProfile(targetID)
    }

}

function removeProfile (targetProfile) {
    // update localStorage profile list    
    let profileList = localStorage.getItem("rectangleProfile").split(" ");
    let profileIndex = profileList.indexOf(targetProfile);
    profileList.splice(profileIndex, 1);
    localStorage.setItem("rectangleProfile", profileList.join(' '));
    populateProfiles()

    // localStorage.getItem("rectangle" + Profilename)
}


window.onload = function () {
    document.getElementById("profileSubmit").onclick=readForm;
    document.getElementById("profileList").onclick=profileEvents;
    populateProfiles();
};