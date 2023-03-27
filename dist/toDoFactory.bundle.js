"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["toDoFactory"],{

/***/ "./src/modules/toDoFactory.js":
/*!************************************!*\
  !*** ./src/modules/toDoFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToCollection": () => (/* binding */ addToCollection),
/* harmony export */   "toDoFactory": () => (/* binding */ toDoFactory)
/* harmony export */ });
const toDoCollection = [];

const toDoFactory = (title, description, dueDate, priority) => {
  const getTitle = () => title;

  return { title, description, dueDate, priority, getTitle };
};

function addToCollection(note) {
  const newToDo = toDoFactory(note);
  toDoCollection.push(newToDo);
  console.log(toDoCollection);
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/toDoFactory.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9Eb0ZhY3RvcnkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90b0RvRmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b0RvQ29sbGVjdGlvbiA9IFtdO1xuXG5jb25zdCB0b0RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZ2V0VGl0bGUgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFRvQ29sbGVjdGlvbihub3RlKSB7XG4gIGNvbnN0IG5ld1RvRG8gPSB0b0RvRmFjdG9yeShub3RlKTtcbiAgdG9Eb0NvbGxlY3Rpb24ucHVzaChuZXdUb0RvKTtcbiAgY29uc29sZS5sb2codG9Eb0NvbGxlY3Rpb24pO1xufVxuXG5leHBvcnQgeyB0b0RvRmFjdG9yeSwgYWRkVG9Db2xsZWN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=