const toDoCollection = [];

const toDoFactory = (title, description, dueDate) => {
  const getTitle = () => title;

  return { title, description, dueDate, getTitle };
};

function addToCollection(note) {
  const newToDo = toDoFactory(note);
  toDoCollection.push(newToDo);
  console.log(toDoCollection);
}

export { toDoFactory, addToCollection };
