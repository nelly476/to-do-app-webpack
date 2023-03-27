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
    <i class="addButton fa-solid fa-circle-plus"></i>
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
    <input type="text" class="title">
    <input type="text" class="description">
    <input type="text" class="dueDate">
    <input type="text" class="priority">
    <button type="submit" id="submitBtn">Add</button>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZEOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVhOzs7Ozs7Ozs7Ozs7Ozs7O0FDNURkOztBQUVBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdG9Eb0ZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkVG9Db2xsZWN0aW9uLCB0b0RvRmFjdG9yeSB9IGZyb20gXCIuL3RvRG9GYWN0b3J5XCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gYWRkTWFpbkxheW91dCgpIHtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVDb250ZW50QXJlYSgpO1xuICAgIGluaXRBZGRUb0RvQnV0dG9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5UTyBETzwvaDE+YDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb250ZW50QXJlYSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZUJhci5jbGFzc05hbWUgPSBcInNpZGViYXJcIjtcbiAgICBzaWRlQmFyLmlubmVySFRNTCA9IGBcbiAgICA8aDM+QWxsPC9oMz5cbiAgICA8aDQ+VG9kYXk8L2g0PlxuICAgIDxoND5XZWVrPC9oND5cbiAgICA8aDM+UHJvamVjdHM8L2gzPlxuICAgIDxoND5TdHVkeTwvaDQ+XG4gICAgPGg0Pldvcms8L2g0PlxuICAgIDxpIGNsYXNzPVwiYWRkQnV0dG9uIGZhLXNvbGlkIGZhLWNpcmNsZS1wbHVzXCI+PC9pPlxuICAgIGA7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFkZFRvRG9CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93VG9Eb01vZHVsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1RvRG9Nb2R1bGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBjb25zdCB0b0RvTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvTW9kdWxlLmNsYXNzTmFtZSA9IFwidG8tZG8tbW9kdWxlXCI7XG4gICAgdG9Eb01vZHVsZS5pbm5lckhUTUwgPSBgXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0aXRsZVwiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImR1ZURhdGVcIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInByaW9yaXR5XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRCdG5cIj5BZGQ8L2J1dHRvbj5cbiAgICBgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb01vZHVsZSk7XG4gICAgY29uc29sZS5sb2coXCJrXCIpO1xuICB9XG4gIHJldHVybiB7IGFkZE1haW5MYXlvdXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFVJIH07XG4iLCJjb25zdCB0b0RvQ29sbGVjdGlvbiA9IFtdO1xuXG5jb25zdCB0b0RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZ2V0VGl0bGUgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFRvQ29sbGVjdGlvbihub3RlKSB7XG4gIGNvbnN0IG5ld1RvRG8gPSB0b0RvRmFjdG9yeShub3RlKTtcbiAgdG9Eb0NvbGxlY3Rpb24ucHVzaChuZXdUb0RvKTtcbiAgY29uc29sZS5sb2codG9Eb0NvbGxlY3Rpb24pO1xufVxuXG5leHBvcnQgeyB0b0RvRmFjdG9yeSwgYWRkVG9Db2xsZWN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=