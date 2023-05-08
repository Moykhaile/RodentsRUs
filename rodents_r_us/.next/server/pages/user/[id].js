"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/user/[id]";
exports.ids = ["pages/user/[id]"];
exports.modules = {

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction UserPage() {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query.id ? `/api/user/${query.id}` : null, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load user\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GabrielRodrigues\\\\Dev\\\\RodentsRUs\\\\rodents_r_us\\\\pages\\\\user\\\\[id].tsx\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, this);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GabrielRodrigues\\\\Dev\\\\RodentsRUs\\\\rodents_r_us\\\\pages\\\\user\\\\[id].tsx\",\n        lineNumber: 15,\n        columnNumber: 27\n    }, this);\n    if (!data) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.name\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GabrielRodrigues\\\\Dev\\\\RodentsRUs\\\\rodents_r_us\\\\pages\\\\user\\\\[id].tsx\",\n        lineNumber: 18,\n        columnNumber: 12\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDZjtBQUV4QixNQUFNRSxVQUFVLENBQUNDLE1BQWdCQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUVuRCxTQUFTQyxXQUFXO0lBQy9CLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdULHNEQUFTQTtJQUMzQixNQUFNLEVBQUVVLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUUsR0FBR1gsK0NBQU1BLENBQ3JDUSxNQUFNSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUVKLE1BQU1JLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUN6Q1g7SUFHSixJQUFJUyxPQUFPLHFCQUFPLDhEQUFDRztrQkFBSTs7Ozs7O0lBQ3ZCLElBQUlGLFdBQVcscUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDM0IsSUFBSSxDQUFDSixNQUFNLE9BQU8sSUFBSTtJQUV0QixxQkFBTyw4REFBQ0k7a0JBQUtKLEtBQUtLLElBQUk7Ozs7OztBQUMxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9kZW50c19yX3VzLy4vcGFnZXMvdXNlci9baWRdLnRzeD9iOGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsOiBzdHJpbmcpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UoKSB7XHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTd3I8VXNlcj4oXHJcbiAgICAgICAgcXVlcnkuaWQgPyBgL2FwaS91c2VyLyR7cXVlcnkuaWR9YCA6IG51bGwsXHJcbiAgICAgICAgZmV0Y2hlclxyXG4gICAgKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdXNlcjwvZGl2PlxyXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbFxyXG5cclxuICAgIHJldHVybiA8ZGl2PntkYXRhLm5hbWV9PC9kaXY+XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3dyIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJVc2VyUGFnZSIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwiaWQiLCJkaXYiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/[id].tsx"));
module.exports = __webpack_exports__;

})();