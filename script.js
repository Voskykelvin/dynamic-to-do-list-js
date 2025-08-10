document.addEventListener('DOMContentLoaded', function () {
  // 2. Select DOM Elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // --- Local Storage helpers & in-memory tasks array ---
  // Load tasks array from localStorage (if present), else start with []
  // Use JSON.parse to convert stored JSON string back into an array.
  let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  // Save the current tasks array to localStorage (serialize with JSON.stringify)
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // --- DOM helper: create and append a task element ---
  function createTaskElement(taskText) {
    const li = document.createElement('li');
     li.classList.add('new');

    // Use a span for the task text so we can reliably read it (avoids mixing with button text)
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Store taskText in a data attribute for reliable lookup when removing
    li.dataset.task = taskText;

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // 3.i.c Remove: when clicked, remove from DOM and from the tasks array, then update localStorage
    removeBtn.addEventListener('click', function () {
      // Remove DOM element
      taskList.removeChild(li);

      // Remove first matching taskText from tasks array and save
      const index = tasks.indexOf(taskText);
      if (index > -1) {
        tasks.splice(index, 1);
        saveTasks();
      }
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // 3. addTask function (taskText optional - if null, read from input)
  function addTask(taskText = null, save = true) {
    // 4.i - Retrieve user input if taskText not provided
    if (taskText === null) {
      taskText = taskInput.value.trim();
    }

    // 3.ii - Validate non-empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create and append the new task
    createTaskElement(taskText);

    // 2.i & 5.i - Update in-memory array and localStorage (unless save === false)
    if (save) {
      tasks.push(taskText);
      saveTasks();
    }

    // Clear input
    taskInput.value = '';
  }

  // 4.i - loadTasks: build DOM from tasks array (called on page load)
  function loadTasks() {
    // Ensure the list is empty before loading
    taskList.innerHTML = '';
    tasks.forEach(t => addTask(t, /*save=*/ false)); // pass false to avoid re-saving while loading
  }

  // 4. Attach event listeners
  addButton.addEventListener('click', function () {
    addTask();
  });

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // 1 & 8. Initialize: load tasks from localStorage on DOMContentLoaded
  loadTasks();
});
