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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/cssinjs */ \"@ant-design/cssinjs\");\n/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(react__WEBPACK_IMPORTED_MODULE_3___default().useLayoutEffect) = (react__WEBPACK_IMPORTED_MODULE_3___default().useEffect);\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const cache = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.createCache)();\n        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_4__.ServerStyleSheet();\n        const originalRenderPage = ctx.renderPage;\n        try {\n            ctx.renderPage = ()=>originalRenderPage({\n                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.StyleProvider, {\n                                cache: cache,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                    ...props\n                                }, void 0, false, {\n                                    fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this))\n                });\n            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n            const style = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.extractStyle)(cache, true);\n            return {\n                ...initialProps,\n                styles: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        initialProps.styles,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                            dangerouslySetInnerHTML: {\n                                __html: style\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        sheet.getStyleElement()\n                    ]\n                }, void 0, true)\n            };\n        } finally{\n            sheet.seal();\n        }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.googleapis.com\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.gstatic.com\",\n                            crossOrigin: \"anonymous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Fira+Code&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_document.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFNdUI7QUFDd0Q7QUFDckQ7QUFDMkI7QUFFckRRLDhEQUFxQixHQUFHQSx3REFBZTtBQUV4QixNQUFNSSxtQkFBbUJaLHNEQUFRQTtJQUM5QyxhQUFhYSxnQkFBZ0JDLEdBQW9CLEVBQUU7UUFDakQsTUFBTUMsUUFBUVYsZ0VBQVdBO1FBQ3pCLE1BQU1XLFFBQVEsSUFBSVAsK0RBQWdCQTtRQUNsQyxNQUFNUSxxQkFBcUJILElBQUlJLFVBQVU7UUFFekMsSUFBSTtZQUNGSixJQUFJSSxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO29CQUNqQkUsWUFBWSxDQUFDQyxNQUFRLENBQUNDLFFBQ3BCTCxNQUFNTSxhQUFhLGVBQ2pCLDhEQUFDZiw4REFBYUE7Z0NBQUNRLE9BQU9BOzBDQUNwQiw0RUFBQ0s7b0NBQUssR0FBR0MsS0FBSzs7Ozs7Ozs7Ozs7Z0JBR3RCO1lBRUYsTUFBTUUsZUFBZSxNQUFNdkIsb0VBQXdCLENBQUNjO1lBQ3BELE1BQU1VLFFBQVFsQixpRUFBWUEsQ0FBQ1MsT0FBTztZQUNsQyxPQUFPO2dCQUNMLEdBQUdRLFlBQVk7Z0JBQ2ZFLHNCQUNFOzt3QkFDR0YsYUFBYUUsTUFBTTtzQ0FDcEIsOERBQUNEOzRCQUFNRSx5QkFBeUI7Z0NBQUVDLFFBQVFIOzRCQUFNOzs7Ozs7d0JBQy9DUixNQUFNWSxlQUFlOzs7WUFHNUI7UUFDRixTQUFVO1lBQ1JaLE1BQU1hLElBQUk7UUFDWjtJQUNGO0lBRUFDLFNBQVM7UUFDUCxxQkFDRSw4REFBQzVCLCtDQUFJQTtZQUFDNkIsTUFBSzs7OEJBQ1QsOERBQUM5QiwrQ0FBSUE7O3NDQUNILDhEQUFDK0I7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzRCQUNMQyxhQUFZOzs7Ozs7c0NBRWQsOERBQUNIOzRCQUNDRSxNQUFLOzRCQUNMRCxLQUFJOzs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNHOztzQ0FDQyw4REFBQ2pDLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2UtdGlja2V0LWZyb250LWVuZC8uL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4PzE4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7XG4gIERvY3VtZW50Q29udGV4dCxcbiAgSGVhZCxcbiAgSHRtbCxcbiAgTWFpbixcbiAgTmV4dFNjcmlwdCxcbn0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNhY2hlLCBleHRyYWN0U3R5bGUsIFN0eWxlUHJvdmlkZXIgfSBmcm9tIFwiQGFudC1kZXNpZ24vY3NzaW5qc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5SZWFjdC51c2VMYXlvdXRFZmZlY3QgPSBSZWFjdC51c2VFZmZlY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4OiBEb2N1bWVudENvbnRleHQpIHtcbiAgICBjb25zdCBjYWNoZSA9IGNyZWF0ZUNhY2hlKCk7XG4gICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xuICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICAgICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcbiAgICAgICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+XG4gICAgICAgICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKFxuICAgICAgICAgICAgICA8U3R5bGVQcm92aWRlciBjYWNoZT17Y2FjaGV9PlxuICAgICAgICAgICAgICAgIDxBcHAgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICA8L1N0eWxlUHJvdmlkZXI+XG4gICAgICAgICAgICApIGFzIGFueSxcbiAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgICAgY29uc3Qgc3R5bGUgPSBleHRyYWN0U3R5bGUoY2FjaGUsIHRydWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFByb3BzLFxuICAgICAgICBzdHlsZXM6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2luaXRpYWxQcm9wcy5zdHlsZXN9XG4gICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZSB9fSAvPlxuICAgICAgICAgICAge3NoZWV0LmdldFN0eWxlRWxlbWVudCgpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2hlZXQuc2VhbCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZSZmYW1pbHk9Sm9zZWZpbitTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDMwMDsxLDQwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIZWFkIiwiSHRtbCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiY3JlYXRlQ2FjaGUiLCJleHRyYWN0U3R5bGUiLCJTdHlsZVByb3ZpZGVyIiwiUmVhY3QiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImNhY2hlIiwic2hlZXQiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY29sbGVjdFN0eWxlcyIsImluaXRpYWxQcm9wcyIsInN0eWxlIiwic3R5bGVzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRTdHlsZUVsZW1lbnQiLCJzZWFsIiwicmVuZGVyIiwibGFuZyIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NPcmlnaW4iLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "@ant-design/cssinjs":
/*!**************************************!*\
  !*** external "@ant-design/cssinjs" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@ant-design/cssinjs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();