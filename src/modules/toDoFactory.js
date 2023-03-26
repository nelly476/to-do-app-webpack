const toDoFactory = (title, description, dueDate, priority) => {
  const getTitle = () => title;

  return { title, description, dueDate, priority, getTitle };
};

export default toDoFactory;
