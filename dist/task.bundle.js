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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/task.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxNQUFNO0VBQ2xCLElBQUlDLHFCQUFxQixHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDeEUsSUFBSUMsY0FBYyxHQUFHLEVBQUU7RUFFdkIsSUFBSUwscUJBQXFCLEVBQUU7SUFDekJLLGNBQWMsR0FBR0wscUJBQXFCO0VBQ3hDO0VBRUEsTUFBTU0sT0FBTyxHQUFHQSxDQUFDQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxFQUFFLE1BQU07SUFDcERILEtBQUs7SUFDTEMsV0FBVztJQUNYQyxPQUFPO0lBQ1BDO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsU0FBU0MsZUFBZUEsQ0FBQ0osS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsRUFBRSxFQUFFO0lBQ3hEO0lBQ0EsTUFBTUUsT0FBTyxHQUFHTixPQUFPLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLEVBQUUsQ0FBQztJQUN4REwsY0FBYyxDQUFDUSxJQUFJLENBQUNELE9BQU8sQ0FBQztJQUM1QlQsWUFBWSxDQUFDVyxPQUFPLENBQUMsVUFBVSxFQUFFYixJQUFJLENBQUNjLFNBQVMsQ0FBQ1YsY0FBYyxDQUFDLENBQUM7O0lBRWhFO0VBQ0Y7O0VBQ0EsT0FBTztJQUFFTSxlQUFlO0lBQUVOO0VBQWUsQ0FBQztBQUM1QyxDQUFDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcblxuY29uc3QgdGFzayA9ICgoKSA9PiB7XG4gIGxldCB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsVGFza3NcIikpO1xuICBsZXQgdG9Eb0NvbGxlY3Rpb24gPSBbXTtcblxuICBpZiAodGFza3NGcm9tTG9jYWxTdG9yYWdlKSB7XG4gICAgdG9Eb0NvbGxlY3Rpb24gPSB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2U7XG4gIH1cblxuICBjb25zdCBuZXdUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaWQpID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBpZCxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkVG9Db2xsZWN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaWQpIHtcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBjb25zdCBuZXdUb0RvID0gbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGlkKTtcbiAgICB0b0RvQ29sbGVjdGlvbi5wdXNoKG5ld1RvRG8pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0NvbGxlY3Rpb24pKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRvRG9Db2xsZWN0aW9uKTtcbiAgfVxuICByZXR1cm4geyBhZGRUb0NvbGxlY3Rpb24sIHRvRG9Db2xsZWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YXNrIH07XG4iXSwibmFtZXMiOlsibmFub2lkIiwidGFzayIsInRhc2tzRnJvbUxvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b0RvQ29sbGVjdGlvbiIsIm5ld1Rhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsImlkIiwiYWRkVG9Db2xsZWN0aW9uIiwibmV3VG9EbyIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==