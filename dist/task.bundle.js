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
  let tasksFromLocalStorage = JSON.parse(localStorage.getItem("allTasks"));
  let toDoCollection = [];

  if (tasksFromLocalStorage) {
    toDoCollection = tasksFromLocalStorage;
  }

  const newTask = (title, description, dueDate) => ({
    title,
    description,
    dueDate,
  });

  function addToCollection(title, description, dueDate) {
    // localStorage.clear();
    const newToDo = newTask(title, description, dueDate);
    toDoCollection.push(newToDo);
    localStorage.setItem("allTasks", JSON.stringify(toDoCollection));
    console.log(toDoCollection);
  }
  return { addToCollection, toDoCollection };
})();




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/task.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhc2sgPSAoKCkgPT4ge1xuICBsZXQgdGFza3NGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFRhc2tzXCIpKTtcbiAgbGV0IHRvRG9Db2xsZWN0aW9uID0gW107XG5cbiAgaWYgKHRhc2tzRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgIHRvRG9Db2xsZWN0aW9uID0gdGFza3NGcm9tTG9jYWxTdG9yYWdlO1xuICB9XG5cbiAgY29uc3QgbmV3VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkVG9Db2xsZWN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGNvbnN0IG5ld1RvRG8gPSBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSk7XG4gICAgdG9Eb0NvbGxlY3Rpb24ucHVzaChuZXdUb0RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9Db2xsZWN0aW9uKSk7XG4gICAgY29uc29sZS5sb2codG9Eb0NvbGxlY3Rpb24pO1xuICB9XG4gIHJldHVybiB7IGFkZFRvQ29sbGVjdGlvbiwgdG9Eb0NvbGxlY3Rpb24gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRhc2sgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==