/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kiyotd/scroll-toggle-active-class"] = factory();
	else
		root["kiyotd/scroll-toggle-active-class"] = factory();
})(typeof self !== "undefined" ? self : this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ScrollToggleActiveClass = void 0;\n/**\n * Assigns a class to the specified element in response to scrolling.\n * @param {OptionsType} options\n * @example\n * // HTML\n * <script>\n * window.addEventListener('DOMContentLoaded', () => {\n *   new ScrollToggleActiveClass({\n *     selectors: ['.box1', '.box2'], // Array of selectors. required\n *     offset: 0, // Offset from the top of the screen. Default: 0\n *     activeClassName: 'active', // Class name to be given once inside the screen. Default: 'active'\n *     once: true, // Off-screen does not remove class. Default: false\n *   });\n * });\n * </script>\n */\nvar ScrollToggleActiveClass = /** @class */ (function () {\n    function ScrollToggleActiveClass(options) {\n        this.options = options;\n        if (!this.options.selectors)\n            throw new Error(\"targets is required.\");\n        if (!this.options.offset)\n            this.options.offset = 0;\n        if (!this.options.activeClassName)\n            this.options.activeClassName = \"active\";\n        if (!this.options.once)\n            this.options.once = false;\n        this.init();\n    }\n    ScrollToggleActiveClass.prototype.init = function () {\n        var _this = this;\n        var observer = new IntersectionObserver(function (entries) {\n            entries.forEach(function (entry) {\n                if (entry.isIntersecting) {\n                    entry.target.classList.add(_this.options.activeClassName);\n                }\n                else {\n                    if (!_this.options.once) {\n                        console.log(_this.options.once);\n                        entry.target.classList.remove(_this.options.activeClassName);\n                    }\n                }\n            });\n        }, {\n            rootMargin: \"-\".concat(this.options.offset, \"px 0px 0px 0px\"),\n        });\n        this.options.selectors.map(function (selector) {\n            var targets = document.querySelectorAll(selector);\n            if (targets.length === 0) {\n                console.log(\"There is no target(\".concat(selector, \").\"));\n                return;\n            }\n            var targetsArr = Array.from(targets);\n            targetsArr.forEach(function (target) {\n                observer.observe(target);\n            });\n        });\n    };\n    return ScrollToggleActiveClass;\n}());\nexports.ScrollToggleActiveClass = ScrollToggleActiveClass;\nwindow.ScrollToggleActiveClass = ScrollToggleActiveClass;\n\n\n//# sourceURL=webpack://kiyotd/scroll-toggle-active-class/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});