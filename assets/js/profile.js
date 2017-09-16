function readForm () {
    let inputValue = document.getElementById("profileInput").value;
    document.getElementById('currentProfile').textContent = inputValue;
    clearInput();
    profilePostLocal(inputValue);
    localStorageManipulation(inputValue);
}

function clearInput () {
    document.getElementById("profileInput").value = "";
}

function populateProfiles () {
    localProfiles = getLocalProfiles();
    for (i=0; i<localProfiles.length; i++) {
        
    }
}


window.onload = function () {
    document.getElementById("profileSubmit").onclick=readForm;
};