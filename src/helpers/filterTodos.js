export default (user, todos) => todos.filter(todo => todo.owner === user._id);
