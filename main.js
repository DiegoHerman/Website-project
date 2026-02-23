/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/account.js"
/*!************************!*\
  !*** ./src/account.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderSignIn: () => (/* binding */ renderSignIn)\n/* harmony export */ });\nfunction renderSignIn(app){\r\n    app.innerHTML=\"\";\r\n\r\n    const signUp=document.createElement(\"section\");\r\n    signUp.style.display=\"flex\";\r\n    signUp.style.justifyContent=\"center\";\r\n    signUp.style.alignItems=\"center\";\r\n    signUp.style.width=\"100vw\";\r\n    signUp.style.height=\"80vh\";\r\n\r\n    const signUpForm=document.createElement(\"div\");\r\n    signUpForm.style.width=\"60%\";\r\n    signUpForm.style.height=\"70%\";\r\n    signUpForm.style.boxShadow=\"5px 5px 30px 0\";\r\n    signUpForm.style.border=\"2px solid black\";\r\n    signUpForm.style.borderRadius=\"10px\";\r\n\r\n    signUp.appendChild(signUpForm);\r\n    app.appendChild(signUp);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWNjb3VudC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUtcHJvamVjdC8uL3NyYy9hY2NvdW50LmpzP2U3MjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNpZ25JbihhcHApe1xyXG4gICAgYXBwLmlubmVySFRNTD1cIlwiO1xyXG5cclxuICAgIGNvbnN0IHNpZ25VcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIHNpZ25VcC5zdHlsZS5kaXNwbGF5PVwiZmxleFwiO1xyXG4gICAgc2lnblVwLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI7XHJcbiAgICBzaWduVXAuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiO1xyXG4gICAgc2lnblVwLnN0eWxlLndpZHRoPVwiMTAwdndcIjtcclxuICAgIHNpZ25VcC5zdHlsZS5oZWlnaHQ9XCI4MHZoXCI7XHJcblxyXG4gICAgY29uc3Qgc2lnblVwRm9ybT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2lnblVwRm9ybS5zdHlsZS53aWR0aD1cIjYwJVwiO1xyXG4gICAgc2lnblVwRm9ybS5zdHlsZS5oZWlnaHQ9XCI3MCVcIjtcclxuICAgIHNpZ25VcEZvcm0uc3R5bGUuYm94U2hhZG93PVwiNXB4IDVweCAzMHB4IDBcIjtcclxuICAgIHNpZ25VcEZvcm0uc3R5bGUuYm9yZGVyPVwiMnB4IHNvbGlkIGJsYWNrXCI7XHJcbiAgICBzaWduVXBGb3JtLnN0eWxlLmJvcmRlclJhZGl1cz1cIjEwcHhcIjtcclxuXHJcbiAgICBzaWduVXAuYXBwZW5kQ2hpbGQoc2lnblVwRm9ybSk7XHJcbiAgICBhcHAuYXBwZW5kQ2hpbGQoc2lnblVwKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/account.js\n\n}");

/***/ },

/***/ "./src/homepage.js"
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.js */ \"./src/account.js\");\n\r\n\r\n\r\nconst nav=document.querySelector(\"nav\");\r\nconst main=document.querySelector(\"#app\");\r\n\r\ndocument.body.style.margin = \"0\";\r\ndocument.body.style.padding = \"0\";\r\n\r\nnav.style.display=\"flex\";\r\nnav.style.justifyContent=\"flex-end\";\r\nnav.style.height=\"60px\";\r\nnav.style.boxShadow=\"2px 5px 0 0\";\r\n\r\n\r\nconst navArray=[\"categories\",\"account\",\"contact\",\"about\"];\r\n\r\nnavArray.forEach(item=>{\r\n    const navBlockLink=document.createElement(\"div\");\r\n    const navLink=document.createElement(\"a\");\r\n    navLink.setAttribute(\"href\",item);\r\n    navLink.textContent=item;\r\n    navBlockLink.style.display=\"flex\";\r\n    navBlockLink.style.alignItems=\"center\";\r\n    navBlockLink.style.justifyContent=\"center\";\r\n    navBlockLink.style.height=\"100%\";\r\n    navBlockLink.style.width=\"60px\";\r\n    navBlockLink.style.border=\"2px solid black\";\r\n    navBlockLink.style.marginLeft=\"10px\";\r\n    navBlockLink.style.marginRight=\"10px\";\r\n    navBlockLink.appendChild(navLink);\r\n\r\n    nav.appendChild(navBlockLink);\r\n});\r\n\r\n// Find the nav link with text \"account\"\r\nconst accountLink = Array.from(nav.querySelectorAll(\"a\"))\r\n                         .find(link => link.textContent.toLowerCase() === \"account\");\r\n\r\nif (accountLink) {\r\n  accountLink.style.cursor = \"pointer\";\r\n\r\n  accountLink.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();           // prevent navigation\r\n    (0,_account_js__WEBPACK_IMPORTED_MODULE_0__.renderSignIn)(main);           // only call on click\r\n  });\r\n}\r\n\r\n\r\n\r\nconst intro=document.createElement(\"section\");\r\nintro.style.marginTop=\"10%\";\r\nintro.style.width=\"60vw\";\r\nconst introHeader=document.createElement(\"h1\");\r\nintroHeader.textContent=\"HOME OF ETERNAL GLOW\";\r\nintroHeader.style.fontSize=\"2rem\";\r\nintro.appendChild(introHeader);\r\n\r\nmain.appendChild(intro);\r\n\r\nconst productSection=document.createElement(\"section\");\r\nproductSection.style.display=\"flex\";\r\nproductSection.style.flexWrap=\"wrap\";\r\nproductSection.style.width=`${100*3+2}px`;\r\nproductSection.style.height=\"100%\";\r\n\r\nfor(let i=0;i<6;i++){\r\n    const prodItem=document.createElement(\"div\");\r\n    prodItem.style.width=\"100px\";\r\n    prodItem.style.height=\"100px\";\r\n    prodItem.style.border=\"2px solid black\";\r\n    prodItem.style.margin=\"5px\";\r\n    prodItem.style.borderRadius=\"10px\";\r\n    productSection.appendChild(prodItem);\r\n}\r\n\r\nmain.appendChild(productSection);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZXBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsSUFBSSx5REFBWSxrQkFBa0I7QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0EsWUFBWSxJQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLXByb2plY3QvLi9zcmMvaG9tZXBhZ2UuanM/MTdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlbmRlclNpZ25Jbn0gZnJvbSBcIi4vYWNjb3VudC5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IG5hdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG5jb25zdCBtYWluPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcblxyXG5uYXYuc3R5bGUuZGlzcGxheT1cImZsZXhcIjtcclxubmF2LnN0eWxlLmp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIjtcclxubmF2LnN0eWxlLmhlaWdodD1cIjYwcHhcIjtcclxubmF2LnN0eWxlLmJveFNoYWRvdz1cIjJweCA1cHggMCAwXCI7XHJcblxyXG5cclxuY29uc3QgbmF2QXJyYXk9W1wiY2F0ZWdvcmllc1wiLFwiYWNjb3VudFwiLFwiY29udGFjdFwiLFwiYWJvdXRcIl07XHJcblxyXG5uYXZBcnJheS5mb3JFYWNoKGl0ZW09PntcclxuICAgIGNvbnN0IG5hdkJsb2NrTGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbmF2TGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIG5hdkxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGl0ZW0pO1xyXG4gICAgbmF2TGluay50ZXh0Q29udGVudD1pdGVtO1xyXG4gICAgbmF2QmxvY2tMaW5rLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCI7XHJcbiAgICBuYXZCbG9ja0xpbmsuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiO1xyXG4gICAgbmF2QmxvY2tMaW5rLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI7XHJcbiAgICBuYXZCbG9ja0xpbmsuc3R5bGUuaGVpZ2h0PVwiMTAwJVwiO1xyXG4gICAgbmF2QmxvY2tMaW5rLnN0eWxlLndpZHRoPVwiNjBweFwiO1xyXG4gICAgbmF2QmxvY2tMaW5rLnN0eWxlLmJvcmRlcj1cIjJweCBzb2xpZCBibGFja1wiO1xyXG4gICAgbmF2QmxvY2tMaW5rLnN0eWxlLm1hcmdpbkxlZnQ9XCIxMHB4XCI7XHJcbiAgICBuYXZCbG9ja0xpbmsuc3R5bGUubWFyZ2luUmlnaHQ9XCIxMHB4XCI7XHJcbiAgICBuYXZCbG9ja0xpbmsuYXBwZW5kQ2hpbGQobmF2TGluayk7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkJsb2NrTGluayk7XHJcbn0pO1xyXG5cclxuLy8gRmluZCB0aGUgbmF2IGxpbmsgd2l0aCB0ZXh0IFwiYWNjb3VudFwiXHJcbmNvbnN0IGFjY291bnRMaW5rID0gQXJyYXkuZnJvbShuYXYucXVlcnlTZWxlY3RvckFsbChcImFcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChsaW5rID0+IGxpbmsudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSA9PT0gXCJhY2NvdW50XCIpO1xyXG5cclxuaWYgKGFjY291bnRMaW5rKSB7XHJcbiAgYWNjb3VudExpbmsuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gIGFjY291bnRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgLy8gcHJldmVudCBuYXZpZ2F0aW9uXHJcbiAgICByZW5kZXJTaWduSW4obWFpbik7ICAgICAgICAgICAvLyBvbmx5IGNhbGwgb24gY2xpY2tcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBpbnRybz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuaW50cm8uc3R5bGUubWFyZ2luVG9wPVwiMTAlXCI7XHJcbmludHJvLnN0eWxlLndpZHRoPVwiNjB2d1wiO1xyXG5jb25zdCBpbnRyb0hlYWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbmludHJvSGVhZGVyLnRleHRDb250ZW50PVwiSE9NRSBPRiBFVEVSTkFMIEdMT1dcIjtcclxuaW50cm9IZWFkZXIuc3R5bGUuZm9udFNpemU9XCIycmVtXCI7XHJcbmludHJvLmFwcGVuZENoaWxkKGludHJvSGVhZGVyKTtcclxuXHJcbm1haW4uYXBwZW5kQ2hpbGQoaW50cm8pO1xyXG5cclxuY29uc3QgcHJvZHVjdFNlY3Rpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbnByb2R1Y3RTZWN0aW9uLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCI7XHJcbnByb2R1Y3RTZWN0aW9uLnN0eWxlLmZsZXhXcmFwPVwid3JhcFwiO1xyXG5wcm9kdWN0U2VjdGlvbi5zdHlsZS53aWR0aD1gJHsxMDAqMysyfXB4YDtcclxucHJvZHVjdFNlY3Rpb24uc3R5bGUuaGVpZ2h0PVwiMTAwJVwiO1xyXG5cclxuZm9yKGxldCBpPTA7aTw2O2krKyl7XHJcbiAgICBjb25zdCBwcm9kSXRlbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvZEl0ZW0uc3R5bGUud2lkdGg9XCIxMDBweFwiO1xyXG4gICAgcHJvZEl0ZW0uc3R5bGUuaGVpZ2h0PVwiMTAwcHhcIjtcclxuICAgIHByb2RJdGVtLnN0eWxlLmJvcmRlcj1cIjJweCBzb2xpZCBibGFja1wiO1xyXG4gICAgcHJvZEl0ZW0uc3R5bGUubWFyZ2luPVwiNXB4XCI7XHJcbiAgICBwcm9kSXRlbS5zdHlsZS5ib3JkZXJSYWRpdXM9XCIxMHB4XCI7XHJcbiAgICBwcm9kdWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9kSXRlbSk7XHJcbn1cclxuXHJcbm1haW4uYXBwZW5kQ2hpbGQocHJvZHVjdFNlY3Rpb24pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/homepage.js\n\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/homepage.js");
/******/ 	
/******/ })()
;