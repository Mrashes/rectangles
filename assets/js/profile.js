function readForm () {
    let inputValue = document.getElementById("profileInput").value;
    document.getElementById('currentProfile').textContent = inputValue;
    clearInput();
    localProfilePost(inputValue);
    localManipulation(inputValue);
}

function clearInput () {
    document.getElementById("profileInput").value = "";
}

function populateProfiles () {
    localProfiles = localGetProfiles();
    let profileDOM = document.getElementById('profileList');
    for (i=0; i<localProfiles.length; i++) {
        var element = document.createElement('p');
        element.textContent = localProfiles[i];
        element.id = localProfiles[i];
        profileDOM.appendChild(element)
    };
}


window.onload = function () {
    document.getElementById("profileSubmit").onclick=readForm;
    populateProfiles()
};