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
    showAllTasksArea();
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

  function showAllTasksArea() {
    const content = document.querySelector(".content");

    const allTasksArea = document.createElement("div");
    allTasksArea.className = "all-tasks-area";
    allTasksArea.innerHTML = `
    <h1>All Tasks</h1>`;
    content.appendChild(allTasksArea);
    if (_task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection.length > 0) {
      showExistingTasks();
    }
  }

  function showExistingTasks() {
    _task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection.map((item) => {
      createTaskElement(item);
    });
  }

  function createTaskElement(item) {
    const allTasksArea = document.querySelector(".all-tasks-area");
    const taskElement = document.createElement("div");
    taskElement.className = "task-element";
    taskElement.innerHTML = `
    <svg class="check-box-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
     <p>${item.title}</p>
     <p>${item.dueDate}</p>
     <span class="right-side-task-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
    </span>
     `;
    allTasksArea.appendChild(taskElement);
  }

  function showToDoModule() {
    const content = document.querySelector(".content");
    if (document.querySelector(".to-do-module")) {
      document.querySelector(".to-do-module").classList.remove("hidden");
    } else {
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
  }

  function initModuleBtn() {
    const addNewToDoBtn = document.querySelector(".add-module-button");
    const closeModuleBtn = document.querySelector(".close-module-button");

    addNewToDoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addNewToDo();
    });

    closeModuleBtn.addEventListener("click", () => {
      document.querySelector(".to-do-module").classList.add("hidden");
      // console.log(document.querySelector(".content").children);
    });
  }

  function addNewToDo() {
    const newNoteTitle = document.getElementById("title").value;
    const newNoteDescription = document.getElementById("description").value;
    const newNoteDeadline = document.getElementById("deadline-date").value;

    _task__WEBPACK_IMPORTED_MODULE_0__.task.addToCollection(newNoteTitle, newNoteDescription, newNoteDeadline);
    // createTaskElement(task.addToCollection[-1]);
    console.log();
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/UI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUEwQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUF1QjtBQUMzQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckIsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHVEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRWE7Ozs7Ozs7Ozs7Ozs7OztBQ25KZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21vZHVsZXMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGFkZE1haW5MYXlvdXQoKSB7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlQ29udGVudEFyZWEoKTtcbiAgICBpbml0QWRkVG9Eb0J1dHRvbigpO1xuICAgIHNob3dBbGxUYXNrc0FyZWEoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgPGgxPlRPIERPPC9oMT5gO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRBcmVhKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlQmFyLmNsYXNzTmFtZSA9IFwic2lkZWJhclwiO1xuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gYFxuICAgIDxoMz5BbGw8L2gzPlxuICAgIDxoND5Ub2RheTwvaDQ+XG4gICAgPGg0PldlZWs8L2g0PlxuICAgIDxoMz5Qcm9qZWN0czwvaDM+XG4gICAgPGg0PlN0dWR5PC9oND5cbiAgICA8aDQ+V29yazwvaDQ+XG4gICAgPHN2ZyBjbGFzcz1cImFkZEJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMy4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTI1NiA1MTJjMTQxLjQgMCAyNTYtMTE0LjYgMjU2LTI1NlMzOTcuNCAwIDI1NiAwUzAgMTE0LjYgMCAyNTZTMTE0LjYgNTEyIDI1NiA1MTJ6TTIzMiAzNDRWMjgwSDE2OGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg2NFYxNjhjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHY2NGg2NGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgyODB2NjRjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjR6XCIvPjwvc3ZnPlxuICAgIGA7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFkZFRvRG9CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93VG9Eb01vZHVsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0FsbFRhc2tzQXJlYSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgYWxsVGFza3NBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxUYXNrc0FyZWEuY2xhc3NOYW1lID0gXCJhbGwtdGFza3MtYXJlYVwiO1xuICAgIGFsbFRhc2tzQXJlYS5pbm5lckhUTUwgPSBgXG4gICAgPGgxPkFsbCBUYXNrczwvaDE+YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFsbFRhc2tzQXJlYSk7XG4gICAgaWYgKHRhc2sudG9Eb0NvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgc2hvd0V4aXN0aW5nVGFza3MoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93RXhpc3RpbmdUYXNrcygpIHtcbiAgICB0YXNrLnRvRG9Db2xsZWN0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY3JlYXRlVGFza0VsZW1lbnQoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudChpdGVtKSB7XG4gICAgY29uc3QgYWxsVGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtdGFza3MtYXJlYVwiKTtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NOYW1lID0gXCJ0YXNrLWVsZW1lbnRcIjtcbiAgICB0YXNrRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPHN2ZyBjbGFzcz1cImNoZWNrLWJveC1zdmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk02NCA4MGMtOC44IDAtMTYgNy4yLTE2IDE2VjQxNmMwIDguOCA3LjIgMTYgMTYgMTZIMzg0YzguOCAwIDE2LTcuMiAxNi0xNlY5NmMwLTguOC03LjItMTYtMTYtMTZINjR6TTAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJIMzg0YzM1LjMgMCA2NCAyOC43IDY0IDY0VjQxNmMwIDM1LjMtMjguNyA2NC02NCA2NEg2NGMtMzUuMyAwLTY0LTI4LjctNjQtNjRWOTZ6TTMzNyAyMDlMMjA5IDMzN2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTY0LTY0Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOXMyNC42LTkuNCAzMy45IDBsNDcgNDdMMzAzIDE3NWM5LjQtOS40IDI0LjYtOS40IDMzLjkgMHM5LjQgMjQuNiAwIDMzLjl6XCIvPjwvc3ZnPlxuICAgICA8cD4ke2l0ZW0udGl0bGV9PC9wPlxuICAgICA8cD4ke2l0ZW0uZHVlRGF0ZX08L3A+XG4gICAgIDxzcGFuIGNsYXNzPVwicmlnaHQtc2lkZS10YXNrLXN2Z1wiPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk00NzEuNiAyMS43Yy0yMS45LTIxLjktNTcuMy0yMS45LTc5LjIgMEwzNjIuMyA1MS43bDk3LjkgOTcuOSAzMC4xLTMwLjFjMjEuOS0yMS45IDIxLjktNTcuMyAwLTc5LjJMNDcxLjYgMjEuN3ptLTI5OS4yIDIyMGMtNi4xIDYuMS0xMC44IDEzLjYtMTMuNSAyMS45bC0yOS42IDg4LjhjLTIuOSA4LjYtLjYgMTguMSA1LjggMjQuNnMxNS45IDguNyAyNC42IDUuOGw4OC44LTI5LjZjOC4yLTIuNyAxNS43LTcuNCAyMS45LTEzLjVMNDM3LjcgMTcyLjMgMzM5LjcgNzQuMyAxNzIuNCAyNDEuN3pNOTYgNjRDNDMgNjQgMCAxMDcgMCAxNjBWNDE2YzAgNTMgNDMgOTYgOTYgOTZIMzUyYzUzIDAgOTYtNDMgOTYtOTZWMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMydjk2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYxNjBjMC0xNy43IDE0LjMtMzIgMzItMzJoOTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIOTZ6XCIvPjwvc3ZnPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk0xMzUuMiAxNy43TDEyOCAzMkgzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZINDE2YzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMySDMyMGwtNy4yLTE0LjNDMzA3LjQgNi44IDI5Ni4zIDAgMjg0LjIgMEgxNjMuOGMtMTIuMSAwLTIzLjIgNi44LTI4LjYgMTcuN3pNNDE2IDEyOEgzMkw1My4yIDQ2N2MxLjYgMjUuMyAyMi42IDQ1IDQ3LjkgNDVIMzQ2LjljMjUuMyAwIDQ2LjMtMTkuNyA0Ny45LTQ1TDQxNiAxMjh6XCIvPjwvc3ZnPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk0yNTYgNTEyQTI1NiAyNTYgMCAxIDAgMjU2IDBhMjU2IDI1NiAwIDEgMCAwIDUxMnpNMjE2IDMzNmgyNFYyNzJIMjE2Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0aDQ4YzEzLjMgMCAyNCAxMC43IDI0IDI0djg4aDhjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRIMjE2Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0em00MC0yMDhhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0elwiLz48L3N2Zz5cbiAgICA8L3NwYW4+XG4gICAgIGA7XG4gICAgYWxsVGFza3NBcmVhLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dUb0RvTW9kdWxlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tbW9kdWxlXCIpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLW1vZHVsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b0RvTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvRG9Nb2R1bGUuY2xhc3NOYW1lID0gXCJ0by1kby1tb2R1bGVcIjtcbiAgICAgIHRvRG9Nb2R1bGUuaW5uZXJIVE1MID0gYFxuICAgICAgPGgyPkFkZCBhIG5ldyB0YXNrPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdUYXNrRm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV3Tm90ZVRpdGxlLWFyZWFcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZSA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ld05vdGVEZXNjcmlwdGlvbi1hcmVhXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCI2XCIgY29scz1cIjMzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWFkbGluZS1hcmVhXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZWFkbGluZS1kYXRlXCI+RGVhZGxpbmU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRlYWRsaW5lLWRhdGVcIiBuYW1lPVwiZGVhZGxpbmUtZGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWFyZWFcIj5cbiAgICAgICAgPHA+UHJpb3JpdHk6PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImxvdy1wcmlvcml0eVwiPkxPVzwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJtZWRpdW0tcHJpb3JpdHlcIj5NRURJVU08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiaGlnaC1wcmlvcml0eVwiPkhJR0g8L3A+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ0bi1hcmVhXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLW1vZHVsZS1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJhZGQtbW9kdWxlLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvRG9Nb2R1bGUpO1xuICAgICAgaW5pdE1vZHVsZUJ0bigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2R1bGVCdG4oKSB7XG4gICAgY29uc3QgYWRkTmV3VG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW1vZHVsZS1idXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VNb2R1bGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLW1vZHVsZS1idXR0b25cIik7XG5cbiAgICBhZGROZXdUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWRkTmV3VG9EbygpO1xuICAgIH0pO1xuXG4gICAgY2xvc2VNb2R1bGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tbW9kdWxlXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTmV3VG9EbygpIHtcbiAgICBjb25zdCBuZXdOb3RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld05vdGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgbmV3Tm90ZURlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWFkbGluZS1kYXRlXCIpLnZhbHVlO1xuXG4gICAgdGFzay5hZGRUb0NvbGxlY3Rpb24obmV3Tm90ZVRpdGxlLCBuZXdOb3RlRGVzY3JpcHRpb24sIG5ld05vdGVEZWFkbGluZSk7XG4gICAgLy8gY3JlYXRlVGFza0VsZW1lbnQodGFzay5hZGRUb0NvbGxlY3Rpb25bLTFdKTtcbiAgICBjb25zb2xlLmxvZygpO1xuICB9XG5cbiAgcmV0dXJuIHsgYWRkTWFpbkxheW91dCB9O1xufSkoKTtcblxuZXhwb3J0IHsgVUkgfTtcbiIsImNvbnN0IHRhc2sgPSAoKCkgPT4ge1xuICBsZXQgdGFza3NGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFRhc2tzXCIpKTtcbiAgbGV0IHRvRG9Db2xsZWN0aW9uID0gW107XG5cbiAgaWYgKHRhc2tzRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgIHRvRG9Db2xsZWN0aW9uID0gdGFza3NGcm9tTG9jYWxTdG9yYWdlO1xuICB9XG5cbiAgY29uc3QgbmV3VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkVG9Db2xsZWN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGNvbnN0IG5ld1RvRG8gPSBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSk7XG4gICAgdG9Eb0NvbGxlY3Rpb24ucHVzaChuZXdUb0RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9Db2xsZWN0aW9uKSk7XG4gICAgY29uc29sZS5sb2codG9Eb0NvbGxlY3Rpb24pO1xuICB9XG4gIHJldHVybiB7IGFkZFRvQ29sbGVjdGlvbiwgdG9Eb0NvbGxlY3Rpb24gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRhc2sgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==