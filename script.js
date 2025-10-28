/* 
document.getElementById("addTaskBtn").addEventListener("click",function (){
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if(taskInput.value.trim() !== ''){
        const li = document.createElement("li");
        li.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener("click",function(){
            taskList.removeChild(li);
        })
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
})
const panel = document.querySelector('.panel');
panel.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop the event from bubbling up
});

document.addEventListener('click', function() {
    panel.style.height = '60px';
}); 


 */

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const panel = document.querySelector(".panel");

// Add new task
addTaskBtn.addEventListener("click", function () {
    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

// Toggle panel content on click
panel.addEventListener("click", function (e) {
    e.stopPropagation();
    panel.classList.toggle("expanded");
});

// Close panel if click outside
document.addEventListener("click", function () {
    panel.classList.remove("expanded");
});
