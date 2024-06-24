document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".add");
    const taskInput = document.querySelector(".task-input");
    const taskContainer = document.querySelector(".task-container");

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            const taskElement = document.createElement("div");
            taskElement.classList.add("t");
            taskElement.textContent = taskText;
            taskContainer.appendChild(taskElement);

            taskElement.addEventListener("click", function() {
                taskElement.style.backgroundColor = 'paleturquoise';
            });
 
            taskElement.addEventListener("dblclick", function() {
                taskElement.remove();           });


            taskInput.value = "";
        }
    }


});