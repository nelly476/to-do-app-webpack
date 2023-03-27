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

export { toDoFactory, addToCollection };
