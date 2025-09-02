document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todoInput');
  const addBtn = document.getElementById('addBtn');
  const todoList = document.getElementById('todoList');
  let todos = [];

  // Load todos from storage
  chrome.storage.sync.get(['todos'], (result) => {
    if (result.todos) {
      todos = result.todos;
      renderTodos();
    }
  });

  // Add new todo
  function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
      };
      todos.unshift(newTodo);
      saveTodos();
      todoInput.value = '';
      renderTodos();
    }
  }

  // Toggle todo completion
  function toggleTodo(id) {
    todos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
    renderTodos();
  }

  // Delete todo
  function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
  }

  // Save todos to storage
  function saveTodos() {
    chrome.storage.sync.set({ todos: todos });
  }

  // Render todos
  function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.addEventListener('change', () => toggleTodo(todo.id));
      
      const span = document.createElement('span');
      span.textContent = todo.text;
      span.className = todo.completed ? 'completed' : '';
      
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTodo(todo.id);
      });
      
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });
  }

  // Event listeners
  addBtn.addEventListener('click', addTodo);
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
});
