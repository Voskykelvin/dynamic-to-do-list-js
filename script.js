// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // 2. Select DOM Elements — place them here
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 3. Create the addTask Function
    function addTask() {
        // ... functionality ...
    }

    // 4. Attach Event Listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
