function readForm () {
    let inputValue = document.getElementById("profileInput").value;
    document.getElementById('currentProfile').textContent = inputValue;
    clearInput();
    localProfilePost(inputValue);
    localManipulation(inputValue);
    populateProfiles()
    return;
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
        var element = document.createElement('p');
        element.textContent = localProfiles[i];
        element.id = localProfiles[i];
        // element.className = 'example';
        profileDOM.appendChild(element);
    };
    return;
}

function setCurrentProfile (targetID) {
    document.getElementById('currentProfile').textContent = targetID;
}

function loadProfile (event) {
    let targetID = event.target.id;
    localLoadHTML(targetID);
    setCurrentProfile(targetID)
    return;
}


window.onload = function () {
    document.getElementById("profileSubmit").onclick=readForm;
    document.getElementById("profileList").onclick=loadProfile;
    populateProfiles();
};