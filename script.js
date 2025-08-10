// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // 2. Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 3. Create the addTask Function
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // If empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new list item and remove button
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('new');

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove task on button click
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button and add li to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // 4. Attach Event Listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
