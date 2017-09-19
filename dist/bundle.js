/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//On double click, have 2 cases one for a double click on main rectangle (color) and on remove (remove)
function dblClick (e) {
  var target = e.target;
  if (target.className.baseVal === 'myrect') {
    colorChange(target)
  }
  else if (target.className.baseVal === 'remove') {
    removeSingleRectangle(target)
  }
}


//This function adds new rectangle to the canvas
function newRectangle () {
  let canvas = document.getElementById('mycanvas');
  //I use to use the number of children at the indicator but have to switch to a global counter for bug reasons
  // let children = String(canvas.children.length/3)
  let counter = localStorage.getItem("counter")
  if (counter === null) {
    counter = 0
  }
  else {}
  canvas.innerHTML += '<circle id="remove'+counter+'" class="remove" fill="#A09DA1" cx="100" cy="70" r="10"/> \n <rect id="rect'+counter+'" class="myrect" fill="#000000" x="100" y="70" width="100" height="100" /> \n <circle id="resize'+counter+'" class="resize" fill="#F5805D" cx="200" cy="170" r="10"/>';
  let intCounter = parseInt(counter)
  intCounter += 1
  localStorage.setItem('counter', intCounter)
  return localManipulation(document.getElementById('currentProfile').textContent)
}

//Stackoverflow answer for removing by id  https://stackoverflow.com/questions/3387427/remove-element-by-id
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function removeSingleRectangle (target) {
  document.getElementById(target.id).remove();
  document.getElementById("rect"+target.id.slice(6)).remove();
  document.getElementById("resize"+target.id.slice(6)).remove();
  return localManipulation(document.getElementById('currentProfile').textContent);
}

function removeAllRectangles () {
  let canvas = document.getElementById('mycanvas');
  canvas.innerHTML = "";
  return localManipulation(document.getElementById('currentProfile').textContent)
}


//This dblclick doesn't work great.  maybe find another way of doing it.
document.addEventListener('dblclick', dblClick, false);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_remove_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_remove_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__color_remove_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_js__ = __webpack_require__(2);
// import './translate-resize.js'
// import './localStorage.js'


// import './colorSelector.js'


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
//Cause I always need it


//blog post on html canvas https://simonsarris.com/making-html5-canvas-useful/
//Was useful but I have transitioned from canvas to svg

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_remove_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_remove_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__color_remove_js__);

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

function removeBlankInArray (array) {
    array.splice(0,1);
    localStorage.setItem("rectangleProfile", array.join(" "));
    return populateProfiles();
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
        return;
    }
    else if (localProfiles[0] === "" && localProfiles.length>1) {
        setCurrentProfile("No Profile Selected");
        removeBlankInArray(localProfiles);
        return;
    }
    else if (localProfiles[0] === "") {
        return setCurrentProfile("No Profile Selected");
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
        setCurrentProfile(targetID);
    }

}

function init () {
    if (localStorage.getItem("rectangleProfile") === null) {
        populateProfiles();
        return;
    }
    else {
        let profileList = localStorage.getItem("rectangleProfile").split(" ")
        localLoadHTML(profileList[0]);
        setCurrentProfile(profileList[0]);
        populateProfiles();
        return;
    }

}

//This official removes profiles
function removeProfile (targetProfile) {
    // update localStorage profile list    
    let profileList = localStorage.getItem("rectangleProfile").split(" ");
    let profileIndex = profileList.indexOf(targetProfile);
    profileList.splice(profileIndex, 1);
    localStorage.setItem("rectangleProfile", profileList.join(' '));
    populateProfiles();

    // localStorage.getItem("rectangle" + Profilename)
}

//on load make 2 listeners and populate the list
window.onload = function () {
    document.getElementById("profileSubmit").onclick=readForm;
    document.getElementById("profileList").onclick=profileEvents;
    document.getElementById("removeRectangles").onclick=removeAllRectangles;
    document.getElementById("newRectangle").onclick=newRectangle;

    init();
};

/***/ })
/******/ ]);