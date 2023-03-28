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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


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
    <h2>Add a new task</h2>
    <div class="newTaskForm">
      <div class="newNoteTitle-area">
        <label for="title">Title </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div class="newNoteDescription-area">
        <label for="description">Description </label>
        <textarea id="description" name="description" rows="6" cols="33"></textarea>
      </div>
      <div class="deadline-area">
      <label for="deadline-date">Deadline</label>
      <input type="date" id="deadline-date" name="deadline-date">
      </div>
      <div class="priority-area">
      <p>Priority:</p>
      <p class="low-priority">LOW</p>
      <p class="medium-priority">MEDIUM</p>
      <p class="high-priority">HIGH</p></div>
      <div class="form-btn-area">
        <button class="close-module-button">Cancel</button>
        <input class="add-module-button" type="submit" value="Add" />
      </div>
    </div>
    </div>
    `;
    content.appendChild(toDoModule);
    initModuleBtn();
  }

  function initModuleBtn() {
    const addNewToDoBtn = document.querySelector(".add-module-button");
    const closeModuleBtn = document.querySelector(".close-module-button");

    addNewToDoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addNewToDo();
    });

    closeModuleBtn.addEventListener("click", () => {
      document.querySelector(".content").children[1].remove();
    });
  }

  function addNewToDo() {
    const newNoteTitle = document.getElementById("title").value;
    const newNoteDescription = document.getElementById("description").value;
    const newNoteDeadline = document.getElementById("deadline-date").value;

    _task__WEBPACK_IMPORTED_MODULE_0__.task.addToCollection(newNoteTitle, newNoteDescription, newNoteDeadline);
  }

  return { addMainLayout };
})();




/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/UI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHVEQUFvQjtBQUN4Qjs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFYTs7Ozs7Ozs7Ozs7Ozs7O0FDdkdkO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGFkZE1haW5MYXlvdXQoKSB7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlQ29udGVudEFyZWEoKTtcbiAgICBpbml0QWRkVG9Eb0J1dHRvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICA8aDE+VE8gRE88L2gxPmA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29udGVudEFyZWEoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcblxuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGVCYXIuY2xhc3NOYW1lID0gXCJzaWRlYmFyXCI7XG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSBgXG4gICAgPGgzPkFsbDwvaDM+XG4gICAgPGg0PlRvZGF5PC9oND5cbiAgICA8aDQ+V2VlazwvaDQ+XG4gICAgPGgzPlByb2plY3RzPC9oMz5cbiAgICA8aDQ+U3R1ZHk8L2g0PlxuICAgIDxoND5Xb3JrPC9oND5cbiAgICA8c3ZnIGNsYXNzPVwiYWRkQnV0dG9uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi4zLjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNMjU2IDUxMmMxNDEuNCAwIDI1Ni0xMTQuNiAyNTYtMjU2UzM5Ny40IDAgMjU2IDBTMCAxMTQuNiAwIDI1NlMxMTQuNiA1MTIgMjU2IDUxMnpNMjMyIDM0NFYyODBIMTY4Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0aDY0VjE2OGMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0djY0aDY0YzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0SDI4MHY2NGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNHpcIi8+PC9zdmc+XG4gICAgYDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0QWRkVG9Eb0J1dHRvbigpIHtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZEJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNob3dUb0RvTW9kdWxlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93VG9Eb01vZHVsZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGNvbnN0IHRvRG9Nb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvRG9Nb2R1bGUuY2xhc3NOYW1lID0gXCJ0by1kby1tb2R1bGVcIjtcbiAgICB0b0RvTW9kdWxlLmlubmVySFRNTCA9IGBcbiAgICA8aDI+QWRkIGEgbmV3IHRhc2s8L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJuZXdUYXNrRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5ld05vdGVUaXRsZS1hcmVhXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmV3Tm90ZURlc2NyaXB0aW9uLWFyZWFcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiByb3dzPVwiNlwiIGNvbHM9XCIzM1wiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZWFkbGluZS1hcmVhXCI+XG4gICAgICA8bGFiZWwgZm9yPVwiZGVhZGxpbmUtZGF0ZVwiPkRlYWRsaW5lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGVhZGxpbmUtZGF0ZVwiIG5hbWU9XCJkZWFkbGluZS1kYXRlXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eS1hcmVhXCI+XG4gICAgICA8cD5Qcmlvcml0eTo8L3A+XG4gICAgICA8cCBjbGFzcz1cImxvdy1wcmlvcml0eVwiPkxPVzwvcD5cbiAgICAgIDxwIGNsYXNzPVwibWVkaXVtLXByaW9yaXR5XCI+TUVESVVNPC9wPlxuICAgICAgPHAgY2xhc3M9XCJoaWdoLXByaW9yaXR5XCI+SElHSDwvcD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ0bi1hcmVhXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1tb2R1bGUtYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImFkZC1tb2R1bGUtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b0RvTW9kdWxlKTtcbiAgICBpbml0TW9kdWxlQnRuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TW9kdWxlQnRuKCkge1xuICAgIGNvbnN0IGFkZE5ld1RvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1tb2R1bGUtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsb3NlTW9kdWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tb2R1bGUtYnV0dG9uXCIpO1xuXG4gICAgYWRkTmV3VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGFkZE5ld1RvRG8oKTtcbiAgICB9KTtcblxuICAgIGNsb3NlTW9kdWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuY2hpbGRyZW5bMV0ucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGROZXdUb0RvKCkge1xuICAgIGNvbnN0IG5ld05vdGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgbmV3Tm90ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdOb3RlRGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYWRsaW5lLWRhdGVcIikudmFsdWU7XG5cbiAgICB0YXNrLmFkZFRvQ29sbGVjdGlvbihuZXdOb3RlVGl0bGUsIG5ld05vdGVEZXNjcmlwdGlvbiwgbmV3Tm90ZURlYWRsaW5lKTtcbiAgfVxuXG4gIHJldHVybiB7IGFkZE1haW5MYXlvdXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFVJIH07XG4iLCJjb25zdCB0YXNrID0gKCgpID0+IHtcbiAgY29uc3QgdG9Eb0NvbGxlY3Rpb24gPSBbXTtcblxuICBjb25zdCBuZXdUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSB9O1xuICB9O1xuXG4gIC8vIGNvbnN0IHRvRG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4ge1xuICAvLyAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgLy8gICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGdldFRpdGxlIH07XG4gIC8vIH07XG5cbiAgZnVuY3Rpb24gYWRkVG9Db2xsZWN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIGNvbnN0IG5ld1RvRG8gPSBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSk7XG4gICAgdG9Eb0NvbGxlY3Rpb24ucHVzaChuZXdUb0RvKTtcbiAgICBjb25zb2xlLmxvZyh0b0RvQ29sbGVjdGlvbik7XG4gIH1cbiAgcmV0dXJuIHsgYWRkVG9Db2xsZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=