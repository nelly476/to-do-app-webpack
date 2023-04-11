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
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");


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
    _task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection.map(item => {
      // console.log(item);
      createTaskElement(item);
    });
    initTaskElemBtn();
  }
  function initTaskElemBtn() {
    const btn = document.getElementsByClassName(`delete-btn`);
    btn.forEach(item => {
      console.log(item);
    });
    // btn.array.forEach((element) => {
    //   element.addEventListener("click", (e) => {
    //     console.log(e.target.id);
    //   });
    // });
  }

  function createTaskElement(item) {
    const allTasksArea = document.querySelector(".all-tasks-area");
    const taskElement = document.createElement("div");
    taskElement.className = "task-element";
    taskElement.setAttribute("id", item.id);
    taskElement.innerHTML = `
    <span class="left-side-task-svg">
    <svg class="check-box-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
     <p>${item.title}</p>
    </span>
     <span class="right-side-task-svg">
     <p>${item.dueDate}</p>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
      <svg class="delete-btn" id=${item.id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/></svg>
    </span>
     `;
    allTasksArea.appendChild(taskElement);
  }
  function showNewToDo() {
    const newTask = _task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection[_task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection.length - 1];
    // console.log(task.toDoCollection);
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
    addNewToDoBtn.addEventListener("click", e => {
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
    const id = (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)();
    _task__WEBPACK_IMPORTED_MODULE_0__.task.addToCollection(newNoteTitle, newNoteDescription, newNoteDeadline, id);
    showNewToDo();
    // initTaskElemBtn();
    // createTaskElement(task.addToCollection[-1]);
    // console.log();
  }

  return {
    addMainLayout
  };
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
  const newTask = (title, description, dueDate, id) => ({
    title,
    description,
    dueDate,
    id
  });
  function addToCollection(title, description, dueDate, id) {
    // localStorage.clear();
    const newToDo = newTask(title, description, dueDate, id);
    toDoCollection.push(newToDo);
    localStorage.setItem("allTasks", JSON.stringify(toDoCollection));

    // console.log(toDoCollection);
  }

  return {
    addToCollection,
    toDoCollection
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDaENJO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGFkZE1haW5MYXlvdXQoKSB7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgY3JlYXRlQ29udGVudEFyZWEoKTtcbiAgICBpbml0QWRkVG9Eb0J1dHRvbigpO1xuICAgIHNob3dBbGxUYXNrc0FyZWEoKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgPGgxPlRPIERPPC9oMT5gO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRBcmVhKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG5cbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlQmFyLmNsYXNzTmFtZSA9IFwic2lkZWJhclwiO1xuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gYFxuICAgIDxoMz5BbGw8L2gzPlxuICAgIDxoND5Ub2RheTwvaDQ+XG4gICAgPGg0PldlZWs8L2g0PlxuICAgIDxoMz5Qcm9qZWN0czwvaDM+XG4gICAgPGg0PlN0dWR5PC9oND5cbiAgICA8aDQ+V29yazwvaDQ+XG4gICAgPHN2ZyBjbGFzcz1cImFkZEJ1dHRvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMy4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTI1NiA1MTJjMTQxLjQgMCAyNTYtMTE0LjYgMjU2LTI1NlMzOTcuNCAwIDI1NiAwUzAgMTE0LjYgMCAyNTZTMTE0LjYgNTEyIDI1NiA1MTJ6TTIzMiAzNDRWMjgwSDE2OGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg2NFYxNjhjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHY2NGg2NGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgyODB2NjRjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjR6XCIvPjwvc3ZnPlxuICAgIGA7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEFkZFRvRG9CdXR0b24oKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93VG9Eb01vZHVsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0FsbFRhc2tzQXJlYSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgYWxsVGFza3NBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbGxUYXNrc0FyZWEuY2xhc3NOYW1lID0gXCJhbGwtdGFza3MtYXJlYVwiO1xuICAgIGFsbFRhc2tzQXJlYS5pbm5lckhUTUwgPSBgXG4gICAgPGgxPkFsbCBUYXNrczwvaDE+YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFsbFRhc2tzQXJlYSk7XG4gICAgaWYgKHRhc2sudG9Eb0NvbGxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgc2hvd0V4aXN0aW5nVGFza3MoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93RXhpc3RpbmdUYXNrcygpIHtcbiAgICB0YXNrLnRvRG9Db2xsZWN0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICBjcmVhdGVUYXNrRWxlbWVudChpdGVtKTtcbiAgICB9KTtcbiAgICBpbml0VGFza0VsZW1CdG4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRUYXNrRWxlbUJ0bigpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBkZWxldGUtYnRuYCk7XG4gICAgYnRuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIH0pO1xuICAgIC8vIGJ0bi5hcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgLy8gICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KGl0ZW0pIHtcbiAgICBjb25zdCBhbGxUYXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10YXNrcy1hcmVhXCIpO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRWxlbWVudC5jbGFzc05hbWUgPSBcInRhc2stZWxlbWVudFwiO1xuICAgIHRhc2tFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGl0ZW0uaWQpO1xuICAgIHRhc2tFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBjbGFzcz1cImxlZnQtc2lkZS10YXNrLXN2Z1wiPlxuICAgIDxzdmcgY2xhc3M9XCJjaGVjay1ib3gtc3ZnXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi40LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNNjQgODBjLTguOCAwLTE2IDcuMi0xNiAxNlY0MTZjMCA4LjggNy4yIDE2IDE2IDE2SDM4NGM4LjggMCAxNi03LjIgMTYtMTZWOTZjMC04LjgtNy4yLTE2LTE2LTE2SDY0ek0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMySDM4NGMzNS4zIDAgNjQgMjguNyA2NCA2NFY0MTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRINjRjLTM1LjMgMC02NC0yOC43LTY0LTY0Vjk2ek0zMzcgMjA5TDIwOSAzMzdjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC02NC02NGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlzMjQuNi05LjQgMzMuOSAwbDQ3IDQ3TDMwMyAxNzVjOS40LTkuNCAyNC42LTkuNCAzMy45IDBzOS40IDI0LjYgMCAzMy45elwiLz48L3N2Zz5cbiAgICAgPHA+JHtpdGVtLnRpdGxlfTwvcD5cbiAgICA8L3NwYW4+XG4gICAgIDxzcGFuIGNsYXNzPVwicmlnaHQtc2lkZS10YXNrLXN2Z1wiPlxuICAgICA8cD4ke2l0ZW0uZHVlRGF0ZX08L3A+XG4gICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTkyIDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi40LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNNDggODBhNDggNDggMCAxIDEgOTYgMEE0OCA0OCAwIDEgMSA0OCA4MHpNMCAyMjRjMC0xNy43IDE0LjMtMzIgMzItMzJIOTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJWNDQ4aDMyYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMySDMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDY0VjI1NkgzMmMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6XCIvPjwvc3ZnPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk00NzEuNiAyMS43Yy0yMS45LTIxLjktNTcuMy0yMS45LTc5LjIgMEwzNjIuMyA1MS43bDk3LjkgOTcuOSAzMC4xLTMwLjFjMjEuOS0yMS45IDIxLjktNTcuMyAwLTc5LjJMNDcxLjYgMjEuN3ptLTI5OS4yIDIyMGMtNi4xIDYuMS0xMC44IDEzLjYtMTMuNSAyMS45bC0yOS42IDg4LjhjLTIuOSA4LjYtLjYgMTguMSA1LjggMjQuNnMxNS45IDguNyAyNC42IDUuOGw4OC44LTI5LjZjOC4yLTIuNyAxNS43LTcuNCAyMS45LTEzLjVMNDM3LjcgMTcyLjMgMzM5LjcgNzQuMyAxNzIuNCAyNDEuN3pNOTYgNjRDNDMgNjQgMCAxMDcgMCAxNjBWNDE2YzAgNTMgNDMgOTYgOTYgOTZIMzUyYzUzIDAgOTYtNDMgOTYtOTZWMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMydjk2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYxNjBjMC0xNy43IDE0LjMtMzIgMzItMzJoOTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIOTZ6XCIvPjwvc3ZnPlxuICAgICAgPHN2ZyBjbGFzcz1cImRlbGV0ZS1idG5cIiBpZD0ke2l0ZW0uaWR9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTI5MC43IDU3LjRMNTcuNCAyOTAuN2MtMjUgMjUtMjUgNjUuNSAwIDkwLjVsODAgODBjMTIgMTIgMjguMyAxOC43IDQ1LjMgMTguN0gyODhoOS40SDUxMmMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkgzODcuOUw1MTguNiAyODUuM2MyNS0yNSAyNS02NS41IDAtOTAuNUwzODEuMyA1Ny40Yy0yNS0yNS02NS41LTI1LTkwLjUgMHpNMjk3LjQgNDE2SDI4OGwtMTA1LjQgMC04MC04MEwyMjcuMyAyMTEuMyAzNjQuNyAzNDguNyAyOTcuNCA0MTZ6XCIvPjwvc3ZnPlxuICAgIDwvc3Bhbj5cbiAgICAgYDtcbiAgICBhbGxUYXNrc0FyZWEuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd05ld1RvRG8oKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2sudG9Eb0NvbGxlY3Rpb25bdGFzay50b0RvQ29sbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgICAvLyBjb25zb2xlLmxvZyh0YXNrLnRvRG9Db2xsZWN0aW9uKTtcbiAgICBjcmVhdGVUYXNrRWxlbWVudChuZXdUYXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dUb0RvTW9kdWxlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tbW9kdWxlXCIpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLW1vZHVsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b0RvTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvRG9Nb2R1bGUuY2xhc3NOYW1lID0gXCJ0by1kby1tb2R1bGVcIjtcbiAgICAgIHRvRG9Nb2R1bGUuaW5uZXJIVE1MID0gYFxuICAgICAgPGgyPkFkZCBhIG5ldyB0YXNrPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdUYXNrRm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV3Tm90ZVRpdGxlLWFyZWFcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZSA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ld05vdGVEZXNjcmlwdGlvbi1hcmVhXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCI2XCIgY29scz1cIjMzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWFkbGluZS1hcmVhXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZWFkbGluZS1kYXRlXCI+RGVhZGxpbmU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRlYWRsaW5lLWRhdGVcIiBuYW1lPVwiZGVhZGxpbmUtZGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWFyZWFcIj5cbiAgICAgICAgPHA+UHJpb3JpdHk6PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImxvdy1wcmlvcml0eVwiPkxPVzwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJtZWRpdW0tcHJpb3JpdHlcIj5NRURJVU08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiaGlnaC1wcmlvcml0eVwiPkhJR0g8L3A+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ0bi1hcmVhXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLW1vZHVsZS1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJhZGQtbW9kdWxlLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvRG9Nb2R1bGUpO1xuICAgICAgaW5pdE1vZHVsZUJ0bigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2R1bGVCdG4oKSB7XG4gICAgY29uc3QgYWRkTmV3VG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW1vZHVsZS1idXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VNb2R1bGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLW1vZHVsZS1idXR0b25cIik7XG5cbiAgICBhZGROZXdUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWRkTmV3VG9EbygpO1xuICAgICAgY2xvc2VNb2R1bGUoKTtcbiAgICB9KTtcblxuICAgIGNsb3NlTW9kdWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZU1vZHVsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2R1bGUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1tb2R1bGVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE5ld1RvRG8oKSB7XG4gICAgY29uc3QgbmV3Tm90ZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdOb3RlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld05vdGVEZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVhZGxpbmUtZGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBpZCA9IG5hbm9pZCgpO1xuXG4gICAgdGFzay5hZGRUb0NvbGxlY3Rpb24obmV3Tm90ZVRpdGxlLCBuZXdOb3RlRGVzY3JpcHRpb24sIG5ld05vdGVEZWFkbGluZSwgaWQpO1xuICAgIHNob3dOZXdUb0RvKCk7XG4gICAgLy8gaW5pdFRhc2tFbGVtQnRuKCk7XG4gICAgLy8gY3JlYXRlVGFza0VsZW1lbnQodGFzay5hZGRUb0NvbGxlY3Rpb25bLTFdKTtcbiAgICAvLyBjb25zb2xlLmxvZygpO1xuICB9XG5cbiAgcmV0dXJuIHsgYWRkTWFpbkxheW91dCB9O1xufSkoKTtcblxuZXhwb3J0IHsgVUkgfTtcbiIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcblxuY29uc3QgdGFzayA9ICgoKSA9PiB7XG4gIGxldCB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsVGFza3NcIikpO1xuICBsZXQgdG9Eb0NvbGxlY3Rpb24gPSBbXTtcblxuICBpZiAodGFza3NGcm9tTG9jYWxTdG9yYWdlKSB7XG4gICAgdG9Eb0NvbGxlY3Rpb24gPSB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2U7XG4gIH1cblxuICBjb25zdCBuZXdUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaWQpID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBpZCxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkVG9Db2xsZWN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaWQpIHtcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGlkKTtcbiAgICB0b0RvQ29sbGVjdGlvbi5wdXNoKG5ld1RvRG8pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0NvbGxlY3Rpb24pKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRvRG9Db2xsZWN0aW9uKTtcbiAgfVxuICByZXR1cm4geyBhZGRUb0NvbGxlY3Rpb24sIHRvRG9Db2xsZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrIH07XG4iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIl0sIm5hbWVzIjpbInRhc2siLCJuYW5vaWQiLCJVSSIsImFkZE1haW5MYXlvdXQiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVDb250ZW50QXJlYSIsImluaXRBZGRUb0RvQnV0dG9uIiwic2hvd0FsbFRhc2tzQXJlYSIsImhlYWRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnQiLCJzaWRlQmFyIiwiYWRkQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93VG9Eb01vZHVsZSIsImFsbFRhc2tzQXJlYSIsInRvRG9Db2xsZWN0aW9uIiwibGVuZ3RoIiwic2hvd0V4aXN0aW5nVGFza3MiLCJtYXAiLCJpdGVtIiwiY3JlYXRlVGFza0VsZW1lbnQiLCJpbml0VGFza0VsZW1CdG4iLCJidG4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlkIiwidGl0bGUiLCJkdWVEYXRlIiwic2hvd05ld1RvRG8iLCJuZXdUYXNrIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9Eb01vZHVsZSIsImluaXRNb2R1bGVCdG4iLCJhZGROZXdUb0RvQnRuIiwiY2xvc2VNb2R1bGVCdG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGROZXdUb0RvIiwiY2xvc2VNb2R1bGUiLCJhZGQiLCJuZXdOb3RlVGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibmV3Tm90ZURlc2NyaXB0aW9uIiwibmV3Tm90ZURlYWRsaW5lIiwiYWRkVG9Db2xsZWN0aW9uIiwidGFza3NGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlc2NyaXB0aW9uIiwibmV3VG9EbyIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==