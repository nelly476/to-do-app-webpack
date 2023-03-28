"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["task"],{

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
const task = (() => {
  const toDoCollection = [];

  const newTask = (title, description, dueDate) => {
    return { title, description, dueDate };
  };

  // const toDoFactory = (title, description, dueDate) => {
  //   const getTitle = () => title;

  //   return { title, description, dueDate, getTitle };
  // };

  function addToCollection(title, description, dueDate) {
    const newToDo = newTask(title, description, dueDate);
    toDoCollection.push(newToDo);
    console.log(toDoCollection);
  }
  return { addToCollection };
})();




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/task.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrID0gKCgpID0+IHtcbiAgY29uc3QgdG9Eb0NvbGxlY3Rpb24gPSBbXTtcblxuICBjb25zdCBuZXdUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSB9O1xuICB9O1xuXG4gIC8vIGNvbnN0IHRvRG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4ge1xuICAvLyAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgLy8gICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGdldFRpdGxlIH07XG4gIC8vIH07XG5cbiAgZnVuY3Rpb24gYWRkVG9Db2xsZWN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIGNvbnN0IG5ld1RvRG8gPSBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSk7XG4gICAgdG9Eb0NvbGxlY3Rpb24ucHVzaChuZXdUb0RvKTtcbiAgICBjb25zb2xlLmxvZyh0b0RvQ29sbGVjdGlvbik7XG4gIH1cbiAgcmV0dXJuIHsgYWRkVG9Db2xsZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=