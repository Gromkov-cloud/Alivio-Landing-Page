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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/adaptiv-menu.js":
/*!***************************************!*\
  !*** ./src/assets/js/adaptiv-menu.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// adaptiv menu open/ close\r\nconst burger = document.querySelector('.burger')\r\nconst adaptivMenu = document.querySelector('.adaptiv-menu')\r\nconst links = document.querySelectorAll('.adaptiv-menu-link')\r\n\r\nburger.addEventListener('click', () => {\r\n    burger.classList.toggle('burger--active')\r\n    adaptivMenu.classList.toggle('adaptiv-menu--active')\r\n    document.querySelector('body').classList.toggle('body--lock')\r\n})\r\n\r\nfor (let link of links) {\r\n    link.addEventListener('click', () => {\r\n        burger.classList.remove('burger--active')\r\n        adaptivMenu.classList.remove('adaptiv-menu--active')\r\n        document.querySelector('body').classList.remove('body--lock')\r\n    })\r\n}\r\n\r\n// anchor scrolling\r\nconst anchors = document.querySelectorAll('a[href*=\"#\"]');\r\n\r\nfor (let anchor of anchors) {\r\n    anchor.addEventListener(\"click\", function (e) {\r\n        e.preventDefault();\r\n        const blockID = anchor.getAttribute('href').substr(1)\r\n\r\n        let fixedHeaderHeight\r\n\r\n        if (window.innerWidth > 1470) {\r\n            fixedHeaderHeight = 85\r\n        }\r\n        else if (769 < window.innerWidth && window.innerWidth < 1471) {\r\n            fixedHeaderHeight = 70\r\n        }\r\n        else if (768 > window.innerWidth) {\r\n            fixedHeaderHeight = 55\r\n        }\r\n\r\n        const top = document.getElementById(blockID).offsetTop - fixedHeaderHeight;\r\n        window.scrollTo({\r\n            top,\r\n            left: 0,\r\n            behavior: \"smooth\",\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/adaptiv-menu.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/video.js":
/*!********************************!*\
  !*** ./src/assets/js/video.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var video = document.querySelector('.community__video');\r\nvar button = document.querySelector('.play-btn');\r\nvar bgImage = document.querySelector('.video-bg');\r\n\r\nvideo.addEventListener('click', function () {\r\n  var iframe = createIframe();\r\n  bgImage.remove();\r\n  button.remove();\r\n  video.appendChild(iframe);\r\n});\r\n\r\nfunction createIframe() {\r\n  var iframe = document.createElement('iframe');\r\n  iframe.setAttribute('allowfullscreen', '');\r\n  iframe.setAttribute('allow', 'autoplay');\r\n  iframe.setAttribute('src', 'https://www.youtube.com/embed/5MdnXpMPI9I?rel=0&showinfo=0&autoplay=1');\r\n  iframe.classList.add('video__media');\r\n  return iframe;\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/video.js?");

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************!*\
  !*** multi ./src/assets/js/adaptiv-menu.js ./src/assets/js/app.js ./src/assets/js/file2.js ./src/assets/js/video.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\alivio\\src\\assets\\js\\adaptiv-menu.js */\"./src/assets/js/adaptiv-menu.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\alivio\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\alivio\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\alivio\\src\\assets\\js\\video.js */\"./src/assets/js/video.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/adaptiv-menu.js_./src/assets/js/app.js_./src/assets/js/file2.js_./src/assets/js/video.js?");

/***/ })

/******/ });