const task = (() => {
  let tasksFromLocalStorage = JSON.parse(localStorage.getItem("allTasks"));
  let toDoCollection = [];

  if (tasksFromLocalStorage) {
    toDoCollection = tasksFromLocalStorage;
  }

  const newTask = (title, description, dueDate, id, priority) => ({
    title,
    description,
    dueDate,
    id,
    priority,
  });

  function addToCollection(title, description, dueDate, id, priority) {
    // localStorage.clear();
    const newToDo = newTask(title, description, dueDate, id, priority);
    toDoCollection.push(newToDo);
    localStorage.setItem("allTasks", JSON.stringify(toDoCollection));

    // console.log(toDoCollection);
  }

  function deleteTask(id) {
    toDoCollection.forEach((item, index) => {
      if (item.id === id) {
        toDoCollection.splice(index, 1);
        // console.log({ item });
        // console.log({ index });
        // console.log({ toDoCollection });
      }
    });

    localStorage.setItem("allTasks", JSON.stringify(toDoCollection));
    // console.log(toDoCollection);
  }

  return { addToCollection, toDoCollection, deleteTask };
})();

export { task };
