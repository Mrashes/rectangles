//Read the input to create a new profile
function readForm () {
    let inputValue = document.getElementById("profileInput").value;
    document.getElementById('currentProfile').textContent = inputValue;
    clearInput();
    localProfilePost(inputValue);
    localManipulation(inputValue);
    populateProfiles()
    return inputValue;
}

//clears input form
function clearInput () {
    document.getElementById("profileInput").value = "";
    return;
}

//creates the list of profiles
function populateProfiles () {
    localProfiles = localGetProfiles();
    let profileDOM = document.getElementById('profileList');
    profileDOM.innerHTML = "";
    if (localProfiles === undefined) {
        return
    }
    else {
        for (i=0; i<localProfiles.length; i++) {
            var div = document.createElement('div')
            div.className = "flex profileName"
            //makes p tags with names of profiles
            var element = document.createElement('p');
            element.textContent = localProfiles[i];
            element.id = localProfiles[i];
            element.className = "btn profileBtn"
            div.appendChild(element);

            //makes button
            var removeButton = document.createElement('img');
            removeButton.src = './assets/img/trashcan.svg'
            removeButton.id = "remove"+localProfiles[i];
            removeButton.className = "trashcan"
            div.appendChild(removeButton);

            profileDOM.appendChild(div)
        };
        return;
    }

}

//set a current profile feild on the DOM
function setCurrentProfile (targetID) {
    document.getElementById('currentProfile').textContent = targetID;
}

//Profile event from the listener
function profileEvents (event) {
    //On BUTTON click remove it
    if (event.target.tagName == "IMG") {
        removeProfile(event.target.id.split('remove')[1]);
        return;
    }
    //on P click set profile
    else if (event.target.tagName == "P"){
        let targetID = event.target.id;
        localLoadHTML(targetID);
        setCurrentProfile(targetID)
    }

}

function init () {
    if (localStorage.getItem("rectangleProfile") === null) {
        return
    }
    else {
        let profileList = localStorage.getItem("rectangleProfile").split(" ")
        localLoadHTML(profileList[0]);
        setCurrentProfile(profileList[0])
        populateProfiles()
        return
    }

}

//This official removes profiles
function removeProfile (targetProfile) {
    // update localStorage profile list    
    let profileList = localStorage.getItem("rectangleProfile").split(" ");
    let profileIndex = profileList.indexOf(targetProfile);
    profileList.splice(profileIndex, 1);
    localStorage.setItem("rectangleProfile", profileList.join(' '));
    populateProfiles()

    // localStorage.getItem("rectangle" + Profilename)
}

//on load make 2 listeners and populate the list
window.onload = function () {
    document.getElementById("profileSubmit").onclick=readForm;
    document.getElementById("profileList").onclick=profileEvents;
    init();
};