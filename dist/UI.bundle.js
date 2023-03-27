"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["UI"],{

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _toDoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoFactory */ "./src/modules/toDoFactory.js");


const UI = (() => {
  function addMainLayout() {
    createHeader();
    createContentArea();
    initAddToDoButton();
  }

  function createHeader() {
    const header = document.createElement("div");
    header.className = "header";
    header.innerHTML = `
    <h1>TO DO</h1>`;
    document.body.appendChild(header);
  }

  function createContentArea() {
    const content = document.createElement("div");
    content.className = "content";

    const sideBar = document.createElement("div");
    sideBar.className = "sidebar";
    sideBar.innerHTML = `
    <h3>All</h3>
    <h4>Today</h4>
    <h4>Week</h4>
    <h3>Projects</h3>
    <h4>Study</h4>
    <h4>Work</h4>
    <svg class="addButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
    `;
    content.appendChild(sideBar);
    document.body.appendChild(content);
  }

  function initAddToDoButton() {
    const addButton = document.querySelector(".addButton");
    addButton.addEventListener("click", () => {
      showToDoModule();
    });
  }

  function showToDoModule() {
    const content = document.querySelector(".content");
    const toDoModule = document.createElement("div");
    toDoModule.className = "to-do-module";
    toDoModule.innerHTML = `
    <form action="" method="get" class="newTaskForm">
      <div class="newNoteTitle-area">
        <label for="title">Title </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div class="newNoteDescription-area">
        <label for="description">Description </label>
        <input type="description" name="description" id="description" required />
      </div>
      <div>
        <p>Due Date</p>
      </div>
      <div><p>Priority</p></div>
      <div class="form-example">
        <p>Cancel</p>
        <input type="submit" value="Add" />
      </div>
    </form>
    `;
    content.appendChild(toDoModule);
    console.log("k");
  }
  return { addMainLayout };
})();




/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/UI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZEOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RWQ7O0FBRUE7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90b0RvRmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRUb0NvbGxlY3Rpb24sIHRvRG9GYWN0b3J5IH0gZnJvbSBcIi4vdG9Eb0ZhY3RvcnlcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBhZGRNYWluTGF5b3V0KCkge1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNyZWF0ZUNvbnRlbnRBcmVhKCk7XG4gICAgaW5pdEFkZFRvRG9CdXR0b24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgPGgxPlRPIERPPC9oMT5gO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRBcmVhKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlQmFyLmNsYXNzTmFtZSA9IFwic2lkZWJhclwiO1xuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gYFxuICAgIDxoMz5BbGw8L2gzPlxuICAgIDxoND5Ub2RheTwvaDQ+XG4gICAgPGg0PldlZWs8L2g0PlxuICAgIDxoMz5Qcm9qZWN0czwvaDM+XG4gICAgPGg0PlN0dWR5PC9oND5cbiAgICA8aDQ+V29yazwvaDQ+XG4gICAgPHN2ZyBjbGFzcz1cImFkZEJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMy4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTI1NiA1MTJjMTQxLjQgMCAyNTYtMTE0LjYgMjU2LTI1NlMzOTcuNCAwIDI1NiAwUzAgMTE0LjYgMCAyNTZTMTE0LjYgNTEyIDI1NiA1MTJ6TTIzMiAzNDRWMjgwSDE2OGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg2NFYxNjhjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHY2NGg2NGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgyODB2NjRjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjR6XCIvPjwvc3ZnPlxuICAgIGA7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFkZFRvRG9CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93VG9Eb01vZHVsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1RvRG9Nb2R1bGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBjb25zdCB0b0RvTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvTW9kdWxlLmNsYXNzTmFtZSA9IFwidG8tZG8tbW9kdWxlXCI7XG4gICAgdG9Eb01vZHVsZS5pbm5lckhUTUwgPSBgXG4gICAgPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwiZ2V0XCIgY2xhc3M9XCJuZXdUYXNrRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5ld05vdGVUaXRsZS1hcmVhXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmV3Tm90ZURlc2NyaXB0aW9uLWFyZWFcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5EdWUgRGF0ZTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj48cD5Qcmlvcml0eTwvcD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWV4YW1wbGVcIj5cbiAgICAgICAgPHA+Q2FuY2VsPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICBgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb01vZHVsZSk7XG4gICAgY29uc29sZS5sb2coXCJrXCIpO1xuICB9XG4gIHJldHVybiB7IGFkZE1haW5MYXlvdXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFVJIH07XG4iLCJjb25zdCB0b0RvQ29sbGVjdGlvbiA9IFtdO1xuXG5jb25zdCB0b0RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZ2V0VGl0bGUgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFRvQ29sbGVjdGlvbihub3RlKSB7XG4gIGNvbnN0IG5ld1RvRG8gPSB0b0RvRmFjdG9yeShub3RlKTtcbiAgdG9Eb0NvbGxlY3Rpb24ucHVzaChuZXdUb0RvKTtcbiAgY29uc29sZS5sb2codG9Eb0NvbGxlY3Rpb24pO1xufVxuXG5leHBvcnQgeyB0b0RvRmFjdG9yeSwgYWRkVG9Db2xsZWN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=