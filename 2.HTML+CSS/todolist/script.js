let inputTask = document.getElementById("todo-input");
let addBtnTask = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");

let taskArray = [
    {
        title: "Ir al gimnasio",
        completed: false,
    },
    {
        title: "Hacer compras mes",
        completed: true,
    },
];

let currentTaskFilter ="all";


function showTask(){
    //filter devuleve un array basado en una condición
    let taskFilter = taskArray.filter((task) =>{
        return true;
    });

    todoList.innerHTML="";
    taskFilter.forEach((task, index)=>{
        //crear un nuevo nodo
        const li = document.createElement("li");
        //data-index es un elemento de tipo dataset
        li.innerHTML = `
            <div class="todo-item ${task.completed ? "task-completed" : ""}">
                <input data-index="${index}" type="checkbox" ${task.completed ? "checked" : ""} />
                <span>${task.title}</span>
            </div>
            <button><i class="bi bi-file-x-fill"></i></button>
        `;
        //agregarlo dentro del objeto todoList
        todoList.appendChild(li);
    });
}

addBtnTask.addEventListener("click", ()=>{
    if (inputTask.value != ""){
        let task ={
            title: inputTask.value,
            completed: false,
        };
        taskArray.push(task);
        inputTask.value="";
        console.log(taskArray);
        showTask();
    }
})

todoList.addEventListener("click", (event)=>{
    if(event.target.tagName === "INPUT"){
        console.log(event.target.dataset);
    }
    if(event.target.tagName === "I"){
        console.log("Boton");
    }
    if(event.target.tagName === "SPAN"){
        console.log("Span");
    }
});


showTask();