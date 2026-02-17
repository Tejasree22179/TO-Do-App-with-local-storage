let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask(){

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task === "") return;

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value="";

    displayTasks();
}

function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

function displayTasks(){

    let list = document.getElementById("taskList");

    list.innerHTML="";

    tasks.forEach((t,i)=>{

        list.innerHTML += `
        <li>
            ${t}
            <button class="delete" onclick="deleteTask(${i})">X</button>
        </li>`;
    });
}
