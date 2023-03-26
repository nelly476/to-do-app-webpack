function addMainLayout() {
  const header = document.createElement("div");
  header.className = "header";
  header.innerHTML = `
  <h2>Header</h2>`;
  document.body.appendChild(header);

  const sideBar = document.createElement("div");
  sideBar.className = "sidebar";
  sideBar.innerHTML = `
  <h3>All</h3>
  <button>Add</button>
  `;
  document.body.appendChild(sideBar);
}

export { addMainLayout };
