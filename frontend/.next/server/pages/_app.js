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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/api/adminTripApi.ts":
/*!*********************************!*\
  !*** ./src/api/adminTripApi.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTripApi: () => (/* binding */ createTripApi),\n/* harmony export */   deleteTripApi: () => (/* binding */ deleteTripApi),\n/* harmony export */   getAllTripsApi: () => (/* binding */ getAllTripsApi),\n/* harmony export */   loginAdmin: () => (/* binding */ loginAdmin),\n/* harmony export */   tripCancellationApi: () => (/* binding */ tripCancellationApi),\n/* harmony export */   updateTripApi: () => (/* binding */ updateTripApi)\n/* harmony export */ });\n/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseApi */ \"./src/api/baseApi.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_baseApi__WEBPACK_IMPORTED_MODULE_0__]);\n_baseApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction tripCancellationApi(tripId, passengerId, passengerData) {\n    return new Promise((resolve, reject)=>{\n        _baseApi__WEBPACK_IMPORTED_MODULE_0__.axiosInstance.put(`trip/trip-cancel/trip/${tripId}/passenger/${passengerId}`, {\n            passengerData\n        }).then((resp)=>resolve(resp)).catch((err)=>reject(err));\n    });\n}\nfunction getAllTripsApi() {\n    return new Promise((resolve, reject)=>{\n        _baseApi__WEBPACK_IMPORTED_MODULE_0__.axiosInstance.get(`trip/get-all-trips`).then((resp)=>{\n            resolve(resp);\n        }).catch((err)=>{\n            reject(err);\n        });\n    });\n}\nfunction createTripApi(tripData) {\n    return new Promise((resolve, reject)=>{\n        _baseApi__WEBPACK_IMPORTED_MODULE_0__.axiosInstance.post(`trip/create`, {\n            ...tripData\n        }).then((resp)=>{\n            resolve(resp);\n        }).catch((err)=>{\n            reject(err);\n        });\n    });\n}\nfunction updateTripApi(tripData) {\n    const { _id, ...restData } = tripData;\n    return new Promise((resolve, reject)=>{\n        _baseApi__WEBPACK_IMPORTED_MODULE_0__.axiosInstance.put(`trip/update-trip/${_id}`, {\n            ...restData\n        }).then((resp)=>{\n            resolve(resp);\n        }).catch((err)=>{\n            reject(err);\n        });\n    });\n}\nfunction deleteTripApi(tripId) {\n    return new Promise((resolve, reject)=>{\n        _baseApi__WEBPACK_IMPORTED_MODULE_0__.axiosInstance.delete(`trip/delete/${tripId}`).then((resp)=>{\n            resolve(resp);\n        }).catch((err)=>{\n            reject(err);\n        });\n    });\n}\nconst loginAdmin = async (data)=>{\n    return new Promise((resolve, reject)=>{\n        _baseApi__WEBPACK_IMPORTED_MODULE_0__.axiosInstance.post(`/login`, {\n            ...data\n        }).then((resp)=>resolve(resp)).catch((err)=>reject(err));\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2FkbWluVHJpcEFwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBRW5DLFNBQVNDLG9CQUNkQyxNQUFjLEVBQ2RDLFdBQW1CLEVBQ25CQyxhQUF1QjtJQUV2QixPQUFPLElBQUlDLFFBQTRCLENBQUNDLFNBQVNDO1FBQy9DUCxtREFBYUEsQ0FDVlEsR0FBRyxDQUFDLENBQUMsc0JBQXNCLEVBQUVOLE9BQU8sV0FBVyxFQUFFQyxZQUFZLENBQUMsRUFBRTtZQUMvREM7UUFDRixHQUNDSyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0osUUFBUUksT0FDdkJDLEtBQUssQ0FBQyxDQUFDQyxNQUFRTCxPQUFPSztJQUMzQjtBQUNGO0FBRU8sU0FBU0M7SUFDZCxPQUFPLElBQUlSLFFBQTRCLENBQUNDLFNBQVNDO1FBQy9DUCxtREFBYUEsQ0FDVmMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsRUFDeEJMLElBQUksQ0FBQyxDQUFDQztZQUNMSixRQUFRSTtRQUNWLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOTCxPQUFPSztRQUNUO0lBQ0o7QUFDRjtBQVNPLFNBQVNHLGNBQWNDLFFBQXFCO0lBQ2pELE9BQU8sSUFBSVgsUUFBNEIsQ0FBQ0MsU0FBU0M7UUFDL0NQLG1EQUFhQSxDQUNWaUIsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFBRSxHQUFHRCxRQUFRO1FBQUMsR0FDbENQLElBQUksQ0FBQyxDQUFDQztZQUNMSixRQUFRSTtRQUNWLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOTCxPQUFPSztRQUNUO0lBQ0o7QUFDRjtBQVVPLFNBQVNNLGNBQWNGLFFBQXFCO0lBQ2pELE1BQU0sRUFBRUcsR0FBRyxFQUFFLEdBQUdDLFVBQVUsR0FBR0o7SUFDN0IsT0FBTyxJQUFJWCxRQUE0QixDQUFDQyxTQUFTQztRQUMvQ1AsbURBQWFBLENBQ1ZRLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFVyxJQUFJLENBQUMsRUFBRTtZQUFFLEdBQUdDLFFBQVE7UUFBQyxHQUM3Q1gsSUFBSSxDQUFDLENBQUNDO1lBQ0xKLFFBQVFJO1FBQ1YsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ05MLE9BQU9LO1FBQ1Q7SUFDSjtBQUNGO0FBRU8sU0FBU1MsY0FBY25CLE1BQWM7SUFDMUMsT0FBTyxJQUFJRyxRQUE0QixDQUFDQyxTQUFTQztRQUMvQ1AsbURBQWFBLENBQ1ZzQixNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUVwQixPQUFPLENBQUMsRUFDOUJPLElBQUksQ0FBQyxDQUFDQztZQUNMSixRQUFRSTtRQUNWLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOTCxPQUFPSztRQUNUO0lBQ0o7QUFDRjtBQUVPLE1BQU1XLGFBQWEsT0FBT0M7SUFDL0IsT0FBTyxJQUFJbkIsUUFBNEIsQ0FBQ0MsU0FBU0M7UUFDL0NQLG1EQUFhQSxDQUNWaUIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFBRSxHQUFHTyxJQUFJO1FBQUMsR0FDekJmLElBQUksQ0FBQyxDQUFDQyxPQUFTSixRQUFRSSxPQUN2QkMsS0FBSyxDQUFDLENBQUNDLE1BQVFMLE9BQU9LO0lBQzNCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2UtdGlja2V0LWZyb250LWVuZC8uL3NyYy9hcGkvYWRtaW5UcmlwQXBpLnRzP2U5MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgYXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuL2Jhc2VBcGlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyaXBDYW5jZWxsYXRpb25BcGkoXG4gIHRyaXBJZDogc3RyaW5nLFxuICBwYXNzZW5nZXJJZDogc3RyaW5nLFxuICBwYXNzZW5nZXJEYXRhOiBzdHJpbmdbXVxuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBheGlvc0luc3RhbmNlXG4gICAgICAucHV0KGB0cmlwL3RyaXAtY2FuY2VsL3RyaXAvJHt0cmlwSWR9L3Bhc3Nlbmdlci8ke3Bhc3NlbmdlcklkfWAsIHtcbiAgICAgICAgcGFzc2VuZ2VyRGF0YSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzb2x2ZShyZXNwKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVHJpcHNBcGkoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBheGlvc0luc3RhbmNlXG4gICAgICAuZ2V0KGB0cmlwL2dldC1hbGwtdHJpcHNgKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXNwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJpcENyZWF0ZSB7XG4gIGJ1c0lkOiBzdHJpbmc7XG4gIGZyb21JZDogc3RyaW5nO1xuICB0b0lkOiBzdHJpbmc7XG4gIHByaWNlOiBzdHJpbmc7XG4gIGRlcGFydHVyZV90aW1lPzogRGF0ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmlwQXBpKHRyaXBEYXRhOiBJVHJpcENyZWF0ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NJbnN0YW5jZVxuICAgICAgLnBvc3QoYHRyaXAvY3JlYXRlYCwgeyAuLi50cmlwRGF0YSB9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXNwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICB9KTtcbn1cblxuaW50ZXJmYWNlIElUcmlwVXBkYXRlIHtcbiAgX2lkOiBzdHJpbmc7XG4gIGJ1c0lkPzogc3RyaW5nO1xuICBmcm9tSWQ/OiBzdHJpbmc7XG4gIHRvSWQ/OiBzdHJpbmc7XG4gIHByaWNlPzogc3RyaW5nO1xuICBkZXBhcnR1cmVfdGltZT86IERhdGU7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVHJpcEFwaSh0cmlwRGF0YTogSVRyaXBVcGRhdGUpIHtcbiAgY29uc3QgeyBfaWQsIC4uLnJlc3REYXRhIH0gPSB0cmlwRGF0YTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55Pj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zSW5zdGFuY2VcbiAgICAgIC5wdXQoYHRyaXAvdXBkYXRlLXRyaXAvJHtfaWR9YCwgeyAuLi5yZXN0RGF0YSB9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXNwKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRyaXBBcGkodHJpcElkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55Pj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zSW5zdGFuY2VcbiAgICAgIC5kZWxldGUoYHRyaXAvZGVsZXRlLyR7dHJpcElkfWApXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3ApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgbG9naW5BZG1pbiA9IGFzeW5jIChkYXRhOiB7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3NJbnN0YW5jZVxuICAgICAgLnBvc3QoYC9sb2dpbmAsIHsgLi4uZGF0YSB9KVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc29sdmUocmVzcCkpXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3NJbnN0YW5jZSIsInRyaXBDYW5jZWxsYXRpb25BcGkiLCJ0cmlwSWQiLCJwYXNzZW5nZXJJZCIsInBhc3NlbmdlckRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInB1dCIsInRoZW4iLCJyZXNwIiwiY2F0Y2giLCJlcnIiLCJnZXRBbGxUcmlwc0FwaSIsImdldCIsImNyZWF0ZVRyaXBBcGkiLCJ0cmlwRGF0YSIsInBvc3QiLCJ1cGRhdGVUcmlwQXBpIiwiX2lkIiwicmVzdERhdGEiLCJkZWxldGVUcmlwQXBpIiwiZGVsZXRlIiwibG9naW5BZG1pbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/adminTripApi.ts\n");

/***/ }),

/***/ "./src/api/baseApi.ts":
/*!****************************!*\
  !*** ./src/api/baseApi.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosInstance: () => (/* binding */ axiosInstance)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    //baseURL: \"http://localhost:7001/api/v1/\",\n    baseURL: \"http://localhost:7001/api/v1/\",\n    withCredentials: true\n}); // export const axiosInstance = axios.create({\n //   baseURL: \"http://192.168.0.106:7001/api/v1/\",\n // });\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2Jhc2VBcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFbkIsTUFBTUMsZ0JBQWdCRCxvREFBWSxDQUFDO0lBQ3hDLDJDQUEyQztJQUMzQ0csU0FBUztJQUNUQyxpQkFBaUI7QUFDbkIsR0FBRyxDQUVILDhDQUE4QztDQUM5QyxrREFBa0Q7Q0FDbEQsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2UtdGlja2V0LWZyb250LWVuZC8uL3NyYy9hcGkvYmFzZUFwaS50cz9lOTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAvL2Jhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo3MDAxL2FwaS92MS9cIixcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjcwMDEvYXBpL3YxL1wiLFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG59KTtcblxuLy8gZXhwb3J0IGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuLy8gICBiYXNlVVJMOiBcImh0dHA6Ly8xOTIuMTY4LjAuMTA2OjcwMDEvYXBpL3YxL1wiLFxuLy8gfSk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJheGlvc0luc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/baseApi.ts\n");

/***/ }),

/***/ "./src/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useAuthContext: () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_adminTripApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/adminTripApi */ \"./src/api/adminTripApi.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_adminTripApi__WEBPACK_IMPORTED_MODULE_3__]);\n_api_adminTripApi__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(undefined);\nconst AuthContextProvider = ({ children, isAuthenticated })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [authenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isAuthenticated);\n    const loginAdminApiAction = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (loginData)=>{\n        try {\n            const { data } = await (0,_api_adminTripApi__WEBPACK_IMPORTED_MODULE_3__.loginAdmin)(loginData);\n            setIsAuthenticated(true);\n            router.replace(`/admin`);\n        } catch (err) {}\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isAuthenticated: authenticated,\n            loginAdminApiAction\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/context/AuthContext.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContextProvider);\nconst useAuthContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuthContext must be used within an AuthContextProvider\");\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFRekI7QUFDa0M7QUFVMUMsTUFBTU8sNEJBQWNMLG9EQUFhQSxDQUN0Q00sV0FDQTtBQUVGLE1BQU1DLHNCQUdELENBQUMsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDakMsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2EsZUFBZUMsbUJBQW1CLEdBQ3ZDVCwrQ0FBUUEsQ0FBVU07SUFFcEIsTUFBTUksc0JBQXNCWixrREFBV0EsQ0FDckMsT0FBT2E7UUFDTCxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNWCw2REFBVUEsQ0FBQ1U7WUFDbENGLG1CQUFtQjtZQUNuQkYsT0FBT00sT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pCLEVBQUUsT0FBT0MsS0FBVSxDQUFDO0lBQ3RCLEdBQ0E7UUFBQ1A7S0FBTztJQUVWLHFCQUNFLDhEQUFDTCxZQUFZYSxRQUFRO1FBQ25CQyxPQUFPO1lBQUVWLGlCQUFpQkU7WUFBZUU7UUFBb0I7a0JBRTVETDs7Ozs7O0FBR1A7QUFFQSxpRUFBZUQsbUJBQW1CQSxFQUFDO0FBRTVCLE1BQU1hLGlCQUFpQjtJQUM1QixNQUFNQyxVQUFVbkIsaURBQVVBLENBQUNHO0lBQzNCLElBQUksQ0FBQ2dCLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQ1I7SUFFSjtJQUNBLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2UtdGlja2V0LWZyb250LWVuZC8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD82ZWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7XG4gIEZDLFxuICBSZWFjdE5vZGUsXG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBsb2dpbkFkbWluIH0gZnJvbSBcIi4uL2FwaS9hZG1pblRyaXBBcGlcIjtcblxuaW50ZXJmYWNlIElBdXRoQ29udGV4dFByb3BzIHtcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICBsb2dpbkFkbWluQXBpQWN0aW9uOiAobG9naW5JbmZvOiB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9KSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElBdXRoQ29udGV4dFByb3BzIHwgdW5kZWZpbmVkPihcbiAgdW5kZWZpbmVkXG4pO1xuXG5jb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyOiBGQzx7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbn0+ID0gKHsgY2hpbGRyZW4sIGlzQXV0aGVudGljYXRlZCB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0SXNBdXRoZW50aWNhdGVkXSA9XG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4oaXNBdXRoZW50aWNhdGVkKTtcblxuICBjb25zdCBsb2dpbkFkbWluQXBpQWN0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGxvZ2luRGF0YTogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgbG9naW5BZG1pbihsb2dpbkRhdGEpO1xuICAgICAgICBzZXRJc0F1dGhlbnRpY2F0ZWQodHJ1ZSk7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKGAvYWRtaW5gKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7fVxuICAgIH0sXG4gICAgW3JvdXRlcl1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGlzQXV0aGVudGljYXRlZDogYXV0aGVudGljYXRlZCwgbG9naW5BZG1pbkFwaUFjdGlvbiB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRQcm92aWRlcjtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwidXNlQXV0aENvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoQ29udGV4dFByb3ZpZGVyXCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImxvZ2luQWRtaW4iLCJBdXRoQ29udGV4dCIsInVuZGVmaW5lZCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzQXV0aGVudGljYXRlZCIsInJvdXRlciIsImF1dGhlbnRpY2F0ZWQiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJsb2dpbkFkbWluQXBpQWN0aW9uIiwibG9naW5EYXRhIiwiZGF0YSIsInJlcGxhY2UiLCJlcnIiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aENvbnRleHQiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        isAuthenticated: !!pageProps.isAuthenticated,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shashikantadas/projects/docker-e-ticket-app/frontend/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUUyQjtBQUsxQyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUEyQjtJQUMzRSxxQkFDRSw4REFBQ0gsNERBQW1CQTtRQUFDSSxpQkFBaUIsQ0FBQyxDQUFDRCxVQUFVQyxlQUFlO2tCQUMvRCw0RUFBQ0Y7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2UtdGlja2V0LWZyb250LWVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgQXV0aENvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuXG50eXBlIFRBcHBQYWdlUHJvcHMgPSB7XG4gIGlzQXV0aGVudGljYXRlZD86IGJvb2xlYW47XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHM8VEFwcFBhZ2VQcm9wcz4pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHRQcm92aWRlciBpc0F1dGhlbnRpY2F0ZWQ9eyEhcGFnZVByb3BzLmlzQXV0aGVudGljYXRlZH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0F1dGhlbnRpY2F0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();