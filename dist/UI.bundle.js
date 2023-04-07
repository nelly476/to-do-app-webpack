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
    // localStorage.clear();
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
      initTaskElemBtn(item);
    });
  }

  function initTaskElemBtn(item) {
    // document.querySelector(".delete-to-do-btn").addEventListener("click" => {

    // })
    console.log(item);
  }

  function createTaskElement(item) {
    const allTasksArea = document.querySelector(".all-tasks-area");
    const taskElement = document.createElement("div");
    taskElement.className = "task-element";
    taskElement.innerHTML = `
    <span class="left-side-task-svg">
    <svg class="check-box-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
     <p>${item.title}</p>
    </span>
     <span class="right-side-task-svg">
     <p>${item.dueDate}</p>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
      <svg class="delete-to-do-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/></svg>

    </span>
     `;
    allTasksArea.appendChild(taskElement);
  }

  function showNewToDo() {
    const newTask = _task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection[_task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection.length - 1];
    createTaskElement(newTask);
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
      closeModule();
    });

    closeModuleBtn.addEventListener("click", () => {
      closeModule();
    });
  }

  function closeModule() {
    document.querySelector(".to-do-module").classList.add("hidden");
  }

  function addNewToDo() {
    const newNoteTitle = document.getElementById("title").value;
    const newNoteDescription = document.getElementById("description").value;
    const newNoteDeadline = document.getElementById("deadline-date").value;

    _task__WEBPACK_IMPORTED_MODULE_0__.task.addToCollection(newNoteTitle, newNoteDescription, newNoteDeadline);
    showNewToDo();
    // createTaskElement(task.addToCollection[-1]);
    // console.log();
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
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");


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
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)(),
  });

  function addToCollection(title, description, dueDate) {
    // localStorage.clear();
    const newToDo = newTask(title, description, dueDate);
    toDoCollection.push(newToDo);
    localStorage.setItem("allTasks", JSON.stringify(toDoCollection));

    // console.log(toDoCollection);
  }
  return { addToCollection, toDoCollection };
})();




/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/UI.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQTBCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMERBQXVCO0FBQzNCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzREFBbUIsQ0FBQyw2REFBMEI7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHVEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFYTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLa0I7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFNO0FBQ2QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnFDO0FBQzlDO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDaENJO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGFkZE1haW5MYXlvdXQoKSB7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlQ29udGVudEFyZWEoKTtcbiAgICBpbml0QWRkVG9Eb0J1dHRvbigpO1xuICAgIHNob3dBbGxUYXNrc0FyZWEoKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgPGgxPlRPIERPPC9oMT5gO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRBcmVhKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlQmFyLmNsYXNzTmFtZSA9IFwic2lkZWJhclwiO1xuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gYFxuICAgIDxoMz5BbGw8L2gzPlxuICAgIDxoND5Ub2RheTwvaDQ+XG4gICAgPGg0PldlZWs8L2g0PlxuICAgIDxoMz5Qcm9qZWN0czwvaDM+XG4gICAgPGg0PlN0dWR5PC9oND5cbiAgICA8aDQ+V29yazwvaDQ+XG4gICAgPHN2ZyBjbGFzcz1cImFkZEJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMy4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTI1NiA1MTJjMTQxLjQgMCAyNTYtMTE0LjYgMjU2LTI1NlMzOTcuNCAwIDI1NiAwUzAgMTE0LjYgMCAyNTZTMTE0LjYgNTEyIDI1NiA1MTJ6TTIzMiAzNDRWMjgwSDE2OGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg2NFYxNjhjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHY2NGg2NGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgyODB2NjRjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjR6XCIvPjwvc3ZnPlxuICAgIGA7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFkZFRvRG9CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93VG9Eb01vZHVsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0FsbFRhc2tzQXJlYSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgYWxsVGFza3NBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxUYXNrc0FyZWEuY2xhc3NOYW1lID0gXCJhbGwtdGFza3MtYXJlYVwiO1xuICAgIGFsbFRhc2tzQXJlYS5pbm5lckhUTUwgPSBgXG4gICAgPGgxPkFsbCBUYXNrczwvaDE+YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFsbFRhc2tzQXJlYSk7XG4gICAgaWYgKHRhc2sudG9Eb0NvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgc2hvd0V4aXN0aW5nVGFza3MoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93RXhpc3RpbmdUYXNrcygpIHtcbiAgICB0YXNrLnRvRG9Db2xsZWN0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY3JlYXRlVGFza0VsZW1lbnQoaXRlbSk7XG4gICAgICBpbml0VGFza0VsZW1CdG4oaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0VGFza0VsZW1CdG4oaXRlbSkge1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXRvLWRvLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiA9PiB7XG5cbiAgICAvLyB9KVxuICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQoaXRlbSkge1xuICAgIGNvbnN0IGFsbFRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXRhc2tzLWFyZWFcIik7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTmFtZSA9IFwidGFzay1lbGVtZW50XCI7XG4gICAgdGFza0VsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgIDxzcGFuIGNsYXNzPVwibGVmdC1zaWRlLXRhc2stc3ZnXCI+XG4gICAgPHN2ZyBjbGFzcz1cImNoZWNrLWJveC1zdmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk02NCA4MGMtOC44IDAtMTYgNy4yLTE2IDE2VjQxNmMwIDguOCA3LjIgMTYgMTYgMTZIMzg0YzguOCAwIDE2LTcuMiAxNi0xNlY5NmMwLTguOC03LjItMTYtMTYtMTZINjR6TTAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJIMzg0YzM1LjMgMCA2NCAyOC43IDY0IDY0VjQxNmMwIDM1LjMtMjguNyA2NC02NCA2NEg2NGMtMzUuMyAwLTY0LTI4LjctNjQtNjRWOTZ6TTMzNyAyMDlMMjA5IDMzN2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTY0LTY0Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOXMyNC42LTkuNCAzMy45IDBsNDcgNDdMMzAzIDE3NWM5LjQtOS40IDI0LjYtOS40IDMzLjkgMHM5LjQgMjQuNiAwIDMzLjl6XCIvPjwvc3ZnPlxuICAgICA8cD4ke2l0ZW0udGl0bGV9PC9wPlxuICAgIDwvc3Bhbj5cbiAgICAgPHNwYW4gY2xhc3M9XCJyaWdodC1zaWRlLXRhc2stc3ZnXCI+XG4gICAgIDxwPiR7aXRlbS5kdWVEYXRlfTwvcD5cbiAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk00OCA4MGE0OCA0OCAwIDEgMSA5NiAwQTQ4IDQ4IDAgMSAxIDQ4IDgwek0wIDIyNGMwLTE3LjcgMTQuMy0zMiAzMi0zMkg5NmMxNy43IDAgMzIgMTQuMyAzMiAzMlY0NDhoMzJjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJINjRWMjU2SDMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnpcIi8+PC9zdmc+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTQ3MS42IDIxLjdjLTIxLjktMjEuOS01Ny4zLTIxLjktNzkuMiAwTDM2Mi4zIDUxLjdsOTcuOSA5Ny45IDMwLjEtMzAuMWMyMS45LTIxLjkgMjEuOS01Ny4zIDAtNzkuMkw0NzEuNiAyMS43em0tMjk5LjIgMjIwYy02LjEgNi4xLTEwLjggMTMuNi0xMy41IDIxLjlsLTI5LjYgODguOGMtMi45IDguNi0uNiAxOC4xIDUuOCAyNC42czE1LjkgOC43IDI0LjYgNS44bDg4LjgtMjkuNmM4LjItMi43IDE1LjctNy40IDIxLjktMTMuNUw0MzcuNyAxNzIuMyAzMzkuNyA3NC4zIDE3Mi40IDI0MS43ek05NiA2NEM0MyA2NCAwIDEwNyAwIDE2MFY0MTZjMCA1MyA0MyA5NiA5NiA5NkgzNTJjNTMgMCA5Ni00MyA5Ni05NlYzMjBjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ2OTZjMCAxNy43LTE0LjMgMzItMzIgMzJIOTZjLTE3LjcgMC0zMi0xNC4zLTMyLTMyVjE2MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmg5NmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkg5NnpcIi8+PC9zdmc+XG4gICAgICA8c3ZnIGNsYXNzPVwiZGVsZXRlLXRvLWRvLWJ0blwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTI5MC43IDU3LjRMNTcuNCAyOTAuN2MtMjUgMjUtMjUgNjUuNSAwIDkwLjVsODAgODBjMTIgMTIgMjguMyAxOC43IDQ1LjMgMTguN0gyODhoOS40SDUxMmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgzODcuOUw1MTguNiAyODUuM2MyNS0yNSAyNS02NS41IDAtOTAuNUwzODEuMyA1Ny40Yy0yNS0yNS02NS41LTI1LTkwLjUgMHpNMjk3LjQgNDE2SDI4OGwtMTA1LjQgMC04MC04MEwyMjcuMyAyMTEuMyAzNjQuNyAzNDguNyAyOTcuNCA0MTZ6XCIvPjwvc3ZnPlxuXG4gICAgPC9zcGFuPlxuICAgICBgO1xuICAgIGFsbFRhc2tzQXJlYS5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93TmV3VG9EbygpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gdGFzay50b0RvQ29sbGVjdGlvblt0YXNrLnRvRG9Db2xsZWN0aW9uLmxlbmd0aCAtIDFdO1xuICAgIGNyZWF0ZVRhc2tFbGVtZW50KG5ld1Rhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1RvRG9Nb2R1bGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1tb2R1bGVcIikpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tbW9kdWxlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvRG9Nb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9Eb01vZHVsZS5jbGFzc05hbWUgPSBcInRvLWRvLW1vZHVsZVwiO1xuICAgICAgdG9Eb01vZHVsZS5pbm5lckhUTUwgPSBgXG4gICAgICA8aDI+QWRkIGEgbmV3IHRhc2s8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm5ld1Rhc2tGb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZXdOb3RlVGl0bGUtYXJlYVwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV3Tm90ZURlc2NyaXB0aW9uLWFyZWFcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbiA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjZcIiBjb2xzPVwiMzNcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlYWRsaW5lLWFyZWFcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlYWRsaW5lLWRhdGVcIj5EZWFkbGluZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGVhZGxpbmUtZGF0ZVwiIG5hbWU9XCJkZWFkbGluZS1kYXRlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktYXJlYVwiPlxuICAgICAgICA8cD5Qcmlvcml0eTo8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwibG93LXByaW9yaXR5XCI+TE9XPC9wPlxuICAgICAgICA8cCBjbGFzcz1cIm1lZGl1bS1wcmlvcml0eVwiPk1FRElVTTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJoaWdoLXByaW9yaXR5XCI+SElHSDwvcD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnRuLWFyZWFcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtbW9kdWxlLWJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImFkZC1tb2R1bGUtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb01vZHVsZSk7XG4gICAgICBpbml0TW9kdWxlQnRuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE1vZHVsZUJ0bigpIHtcbiAgICBjb25zdCBhZGROZXdUb0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbW9kdWxlLWJ1dHRvblwiKTtcbiAgICBjb25zdCBjbG9zZU1vZHVsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbW9kdWxlLWJ1dHRvblwiKTtcblxuICAgIGFkZE5ld1RvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhZGROZXdUb0RvKCk7XG4gICAgICBjbG9zZU1vZHVsZSgpO1xuICAgIH0pO1xuXG4gICAgY2xvc2VNb2R1bGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlTW9kdWxlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1vZHVsZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLW1vZHVsZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTmV3VG9EbygpIHtcbiAgICBjb25zdCBuZXdOb3RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld05vdGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgbmV3Tm90ZURlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWFkbGluZS1kYXRlXCIpLnZhbHVlO1xuXG4gICAgdGFzay5hZGRUb0NvbGxlY3Rpb24obmV3Tm90ZVRpdGxlLCBuZXdOb3RlRGVzY3JpcHRpb24sIG5ld05vdGVEZWFkbGluZSk7XG4gICAgc2hvd05ld1RvRG8oKTtcbiAgICAvLyBjcmVhdGVUYXNrRWxlbWVudCh0YXNrLmFkZFRvQ29sbGVjdGlvblstMV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCk7XG4gIH1cblxuICByZXR1cm4geyBhZGRNYWluTGF5b3V0IH07XG59KSgpO1xuXG5leHBvcnQgeyBVSSB9O1xuIiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuXG5jb25zdCB0YXNrID0gKCgpID0+IHtcbiAgbGV0IHRhc2tzRnJvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxUYXNrc1wiKSk7XG4gIGxldCB0b0RvQ29sbGVjdGlvbiA9IFtdO1xuXG4gIGlmICh0YXNrc0Zyb21Mb2NhbFN0b3JhZ2UpIHtcbiAgICB0b0RvQ29sbGVjdGlvbiA9IHRhc2tzRnJvbUxvY2FsU3RvcmFnZTtcbiAgfVxuXG4gIGNvbnN0IG5ld1Rhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSA9PiAoe1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgaWQ6IG5hbm9pZCgpLFxuICB9KTtcblxuICBmdW5jdGlvbiBhZGRUb0NvbGxlY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgY29uc3QgbmV3VG9EbyA9IG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcbiAgICB0b0RvQ29sbGVjdGlvbi5wdXNoKG5ld1RvRG8pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0NvbGxlY3Rpb24pKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRvRG9Db2xsZWN0aW9uKTtcbiAgfVxuICByZXR1cm4geyBhZGRUb0NvbGxlY3Rpb24sIHRvRG9Db2xsZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrIH07XG4iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9