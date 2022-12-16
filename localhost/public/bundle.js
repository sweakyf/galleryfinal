/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPictures": () => (/* binding */ getPictures)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/util.js");


const MAX_COMMENT_COUNT = 10;
const MAX_AVATAR_COUNT = 6;
const MAX_PHOTO_COUNT = 25;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;

const descriptions = [
    'красивая картинка',
    'крутая картинка',
    'классная картинка',
    'прикольная картинка',
];

const messages = [
    'круто',
    'красиво',
    'классно',
    'прикольно',
    'фу'
];

const usernames = [
    'Павел',
    'Артём',
    'Никита',
    'Антон',
];

function getComment(count) {
    return {
        id: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_COMMENT_COUNT * count),
        message: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(messages),
        user: {
            avatar: `./img/avatars/${(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_AVATAR_COUNT)}.svg`,
            name: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(usernames),
        }
    };
}

function getPictures(count) {
    const arrayPictures = [];
    while (arrayPictures.length < count) {
        const comments = [];

        while (comments.length < (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_COMMENT_COUNT)) {
            comments.push(getComment(count));
        }
    
        const picture = {
            id: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, count),
            url: `./photos/${(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, MAX_PHOTO_COUNT)}.jpg`,
            description: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(descriptions),
            likes: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
            comments: comments
        }
        arrayPictures.push(picture);
    }

    return arrayPictures;
}




/***/ }),

/***/ "./src/pictures-list.js":
/*!******************************!*\
  !*** ./src/pictures-list.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPicturesList": () => (/* binding */ renderPicturesList)
/* harmony export */ });
const picturesListElement = document.querySelector('.pictures');
const pictureTemplateElement= document.getElementById('picture')
    .content
    .querySelector(".picture");

const renderPicturesList = (pictures) => {
    pictures.forEach((picture) => {
        const pictureElement = pictureTemplateElement.cloneNode(true);

        pictureElement.querySelector('img').src = picture.url;
        // pictureElement.querySelector('img').setAttribute('src', picture.url);

        pictureElement.querySelector('img').alt = picture.description;
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

        picturesListElement.append(pictureElement);
    });
}




/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomArrayElement": () => (/* binding */ getRandomArrayElement),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt)
/* harmony export */ });
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
    return array[getRandomInt(0, array.length - 1)];
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _pictures_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures-list.js */ "./src/pictures-list.js");



const pictures = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.getPictures)(3);

(0,_pictures_list_js__WEBPACK_IMPORTED_MODULE_1__.renderPicturesList)(pictures);
// console.log(pictures);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map