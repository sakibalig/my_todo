const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todoItem = document.createElement('li');
    const todoTextSpan = document.createElement('span');
    todoTextSpan.textContent = todoText;
    const cutSpan = document.createElement('span');
    cutSpan.textContent = 'x';
    cutSpan.addEventListener('click', () => {
      todoList.removeChild(todoItem);
    });
    todoItem.style.backgroundColor = '#d4fdda'; // Light green
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(cutSpan);
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
}