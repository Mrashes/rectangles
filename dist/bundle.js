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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate_resize_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate_resize_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__translate_resize_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localStorage_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localStorage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__localStorage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_remove_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_remove_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__color_remove_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__profile_js__);






function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
//Cause I always need it


//blog post on html canvas https://simonsarris.com/making-html5-canvas-useful/
//Was useful but I have transitioned from canvas to svg

/***/ }),
/* 1 */
/***/ (function(module, exports) {

//This is the svg shape Resizer and translator
document.addEventListener('mousedown', mousedown, false);

var mousedown_points;
//On mouse down check what the mouse down is on
function mousedown (e) {

    window.target = e.target;
    if (target.className.baseVal === 'resize') {
        mousedown_points = {
            x: e.clientX,
            y: e.clientY
        }
        document.addEventListener('mouseup', mouseup, false);
        document.addEventListener('mousemove', mousemove, false);
    }
    else if (target.className.baseVal === 'myrect') {
      mousedown_points = {
        x: e.clientX,
        y: e.clientY
    }
    document.addEventListener('mouseup', mouseupTranslate, false);
    document.addEventListener('mousemove', mousemoveTranslate, false);
    }
}

//when you move the mouse on resize transform the main rectangle based on movement
function mousemove (e) {
    var current_points = {
        x: e.clientX,
        y: e.clientY
    }
    // console.log("rect"+String(parseInt(window.target.id)-parseInt(1)))

    var rect= document.getElementById("rect"+window.target.id[6]);
    var w=parseFloat(rect.getAttribute('width'));
    var h=parseFloat(rect.getAttribute('height'));

    var dx=current_points.x-mousedown_points.x;
    var dy=current_points.y-mousedown_points.y;

    w+=dx;
    h+=dy;

    
    if (w<=0 || h<=0) {
        return console.log('Issue with negative numbers')
    }

    else {
        rect.setAttribute('width',w);
        rect.setAttribute('height',h);
    
        mousedown_points=current_points;
    
        updateResizeIcon(dx,dy);    
    }   
}

//The Resize icon doesn't transform but translates so change the positioning
function updateResizeIcon (dx,dy){
    var resize= document.getElementById(window.target.id);
    var x=parseFloat(resize.getAttribute('cx'));
    var y=parseFloat(resize.getAttribute('cy'));

    x+=dx;
    y+=dy;

    resize.setAttribute('cx',x);
    resize.setAttribute('cy',y);
}

//When you lift up on the mouse remove the listeners for mouse movement
function mouseup (e) {
    localManipulation(document.getElementById('currentProfile').textContent);
    document.removeEventListener('mouseup', mouseup, false);
    document.removeEventListener('mousemove', mousemove, false);
}

//These are the same but translating only
function mousemoveTranslate (e) {
    var current_points = {
        x: e.clientX,
        y: e.clientY
    }

    var rect= document.getElementById(window.target.id);
    var x=parseFloat(rect.getAttribute('x'));
    var y=parseFloat(rect.getAttribute('y'));

    var dx=current_points.x-mousedown_points.x;
    var dy=current_points.y-mousedown_points.y;

    x+=dx;
    y+=dy;

    rect.setAttribute('x',x);
    rect.setAttribute('y',y);

    mousedown_points=current_points;

    updateResizeIconTranslate(dx,dy);
}

function updateResizeIconTranslate (dx,dy){
    var resize= document.getElementById("resize"+window.target.id[4]);
    var x=parseFloat(resize.getAttribute('cx'));
    var y=parseFloat(resize.getAttribute('cy'));

    x+=dx;
    y+=dy;

    resize.setAttribute('cx',x);
    resize.setAttribute('cy',y);

    updateRemoveIconTranslate(dx,dy)
}

function updateRemoveIconTranslate (dx,dy) {
    var remove= document.getElementById("remove"+window.target.id[4]);
    var x=parseFloat(remove.getAttribute('cx'));
    var y=parseFloat(remove.getAttribute('cy'));

    x+=dx;
    y+=dy;

    remove.setAttribute('cx',x);
    remove.setAttribute('cy',y);
}

function mouseupTranslate (e) {
    localManipulation(document.getElementById('currentProfile').textContent);
    document.removeEventListener('mouseup', mouseupTranslate, false);
    document.removeEventListener('mousemove', mousemoveTranslate, false);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
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

//This is a random color generator to place hold until I implement that color slider idea
function randomColor () {
  // let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'aqua'];
  let colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LawnGreen","LemonChiffon","Lime","LimeGreen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","Yellow","YellowGreen"];
  
  return colors[getRandomInt(0, colors.length)];
}

//Change the fill of a color based on random color
function colorChange (target) {
  color = randomColor();
  var rect= document.getElementById(target.id);
  rect.setAttribute('fill', color);
}

//This function adds new rectangle to the canvas
function newRectangle () {
  let canvas = document.getElementById('mycanvas');
  let children = canvas.children.length
  canvas.innerHTML += '<circle id="remove'+String(children/3)+'" class="remove" fill="#A09DA1" cx="100" cy="70" r="10"/> \n <rect id="rect'+String(children/3)+'" class="myrect" fill="black" x="100" y="70" width="100" height="100" /> \n <circle id="resize'+String(children/3)+'" class="resize" fill="#F5805D" cx="200" cy="170" r="10"/>'
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
  document.getElementById("rect"+target.id[6]).remove();
  document.getElementById("resize"+target.id[6]).remove();
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
/* 4 */
/***/ (function(module, exports) {

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