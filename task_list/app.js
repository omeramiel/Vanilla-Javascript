// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', loadTasksToUI);
  // Add task event listener
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear tasks event listener
  clearBtn.addEventListener('click', clearTasks);
  // Filter task event listener
  filter.addEventListener('input', filterTask)
}

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
    return;
  }

  addTaskUI(taskInput.value);

  addTaskToPersistent(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Add task to local storage
function addTaskToPersistent(task) {
  let tasks = loadTasks();
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTaskUI(task) {
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(task));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);
}

// Remove Task
function removeTask(e) {
  const task = e.target.parentElement;
  if (task.classList.contains('delete-item')) {
    removeTaskFromPersistent(task.parentElement.textContent);
    task.parentElement.remove();
  }
}

// Remove task from local storage
function removeTaskFromPersistent(task) {
  let tasks = loadTasks();
  tasks.forEach((item, index) => {
    if (item === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks(e) {
  while (taskList.firstChild) {
    // removeTaskFromPersistent(taskList.firstChild.textContent)
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.clear();
}

// Filter Task
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
}

// Load tasks from persistent
function loadTasks() {
  if (localStorage.getItem('tasks') === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('tasks'));
  }
}

function loadTasksToUI() {
  loadTasks().forEach(task => {
    addTaskUI(task);
  });
}