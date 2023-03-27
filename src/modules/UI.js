import { addToCollection, toDoFactory } from "./toDoFactory";

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
    <h2>Add a task</h2>
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
      <label for="deadline-date">Deadline</label>
      <input type="date" id="deadline-date" name="deadline-date">
      </div>
      <div>
      <p>Priority</p>
      <p>LOW</p>
      <p>MEDIUM</p>
      <p>HIGH</p></div>
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

export { UI };
