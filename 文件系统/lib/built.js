/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// 使用 `try...catch` 可以捕获用户取消选择时抛出的错误，如果你对错误不在意，不捕获也行\r\nconst handle =  showOpenFilePicker({\r\n    multiple: false, // 只选择一个文件\r\n    types: [\r\n        {\r\n            description: 'Navlang Files',\r\n            accept: {\r\n                'image/*': ['.png', '.gif', '.jpeg', '.jpg'],\r\n            },\r\n        },\r\n    ],\r\n    excludeAcceptAllOption: true,\r\n});\r\n\n\n//# sourceURL=webpack://file_systerm/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;