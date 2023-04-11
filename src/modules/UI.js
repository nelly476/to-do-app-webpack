import { task } from "./task";
import { nanoid } from "nanoid";

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
    <h1>All Tasks</h1>
    <div class="all-tasks"></div>
    `;

    content.appendChild(allTasksArea);
    if (task.toDoCollection.length > 0) {
      showExistingTasks();
    }
  }

  function showExistingTasks() {
    task.toDoCollection.map((item) => {
      // console.log(item);
      createTaskElement(item);
      // initTaskElemBtn();
    });
  }

  function initTaskElemBtn(id) {
    document.getElementById(`${id}`).addEventListener("click", () => {
      task.deleteTask(id);
      removeTaskFromTasksArea();
      // console.log(task.toDoCollection);
      showExistingTasks();
    });
  }

  function removeTaskFromTasksArea() {
    const allTasksArea = document.querySelector(".all-tasks");
    allTasksArea.innerHTML = "";
  }

  function createTaskElement(item) {
    const allTasksArea = document.querySelector(".all-tasks");
    const taskElement = document.createElement("div");

    taskElement.className = `task-element ${item.priority}`;
    // taskElement.setAttribute("id", item.id);
    taskElement.innerHTML = `
    <span class="left-side-task-svg">
    <svg class="check-box-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
     <p>${item.title}</p>
    </span>
     <span class="right-side-task-svg">
     <p>${item.dueDate}</p>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
      <svg id=${item.id} class="delete-btn" id=${item.id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/></svg>
    </span>
     `;
    allTasksArea.appendChild(taskElement);
    initTaskElemBtn(item.id);
  }

  function showNewToDo() {
    const newTask = task.toDoCollection[task.toDoCollection.length - 1];
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
        <p class="low-priority-btn">LOW</p>
        <p class="medium-priority-btn">MEDIUM</p>
        <p class="high-priority-btn">HIGH</p></div>
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

    const lowPriorityBtn = document.querySelector(".low-priority-btn");
    const mediumPriorityBtn = document.querySelector(".medium-priority-btn");
    const highPriorityBtn = document.querySelector(".high-priority-btn");
    let priority = "";

    const priorityButtons = [
      lowPriorityBtn,
      mediumPriorityBtn,
      highPriorityBtn,
    ];
    priorityButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        priority = e.target.classList.value;
        if (e.target.classList.value.includes("low-priority")) {
          priority = "low-priority";
          mediumPriorityBtn.classList.remove("clicked");
          highPriorityBtn.classList.remove("clicked");
          e.target.classList.add("clicked");
        } else if (e.target.classList.value.includes("medium-priority")) {
          lowPriorityBtn.classList.remove("clicked");
          highPriorityBtn.classList.remove("clicked");
          e.target.classList.add("clicked");
          priority = "medium-priority";
        } else if (e.target.classList.value.includes("high-priority")) {
          lowPriorityBtn.classList.remove("clicked");
          mediumPriorityBtn.classList.remove("clicked");
          e.target.classList.add("clicked");
          priority = "high-priority";
        }
      });
    });

    addNewToDoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addNewToDo(priority);
      closeModule();
    });

    closeModuleBtn.addEventListener("click", () => {
      closeModule();
    });
  }

  function closeModule() {
    document.querySelector(".to-do-module").classList.add("hidden");
  }

  function addNewToDo(priority) {
    const newNoteTitle = document.getElementById("title").value;
    const newNoteDescription = document.getElementById("description").value;
    const newNoteDeadline = document.getElementById("deadline-date").value;
    const id = nanoid();

    task.addToCollection(
      newNoteTitle,
      newNoteDescription,
      newNoteDeadline,
      id,
      priority
    );
    showNewToDo();
    // initTaskElemBtn();
    // createTaskElement(task.addToCollection[-1]);
    // console.log();
  }

  return { addMainLayout };
})();

export { UI };
