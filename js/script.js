const addTaskButton = document.getElementById("send-task-btn");
const inputTaskContent = document.getElementById("write-task-input");
const EditTaskModal = document.getElementsByClassName("modals-container")[0];
const ModalContainer = document.getElementsByClassName("modals-container")[0];
var TextInputEdit = document.getElementById("edit-task-input");
var TaskName;

addTaskButton.addEventListener("click", AddTask);

function AddTask() { // function to add a task
    let TaskName = String(inputTaskContent.value);

    if (TaskName == '') {
        inputTaskContent.style.border = '2px solid #B45050';
        return;
    }
    inputTaskContent.style.border = '2px solid #D9D9D9';
    let newTask = document.createElement("div");
    newTask.classList.add("task-content");

    
    newTask.innerHTML =
        `
    <div class="task-name-container">
        <p class="task-name">${TaskName}</p>
    </div>
    <div class="task-buttons">
        <button class="edit-task-btn"><i class='bx bxs-pencil' ></i></button>
        <button class="checked-task-btn"><i class='bx bx-check' ></i></button>
        <button class="remove-task-btn"><i class='bx bx-x' ></i></button>
    </div>
    `
    document.getElementsByClassName("task-container")[0].appendChild(newTask);
    inputTaskContent.value = '';
}

var CheckedTaskName = document.getElementsByClassName("task-name-container");

document.addEventListener("click", (event) => { // document function to add event listener for buttons`s task using event.target

    targetEl = event.target
    if (targetEl.classList.contains('bx-x') && targetEl.id != 'close-icon') {
        let parentEl = targetEl.parentElement.parentElement.parentElement.remove();
    } else if (targetEl.classList.contains('bx-check')) {
        TaskName = targetEl.parentElement.parentElement.parentElement.children[0].children[0];
        TaskName.classList.toggle("task-name-checked");
    }else if(targetEl.classList.contains('bxs-pencil')){
        EditTaskModal.style.display = 'flex';
        TaskName = targetEl.parentElement.parentElement.parentElement.children[0].children[0];
        TextInputEdit.value = TaskName.innerText;
        console.log(TextInputEdit);
        return TaskName; // return var to use in an other function
    }else if(targetEl == ModalContainer){
        CloseModal();
    }
})

const CloseModalIcon = document.getElementById("close-icon")

function CloseModal(){
    EditTaskModal.style.display = 'none';
}

CloseModalIcon.addEventListener("click", CloseModal);

const EditTaskDone = document.getElementById("edit-task-modal-btn");
EditTaskDone.addEventListener("click", function rewriteTaskName(){
    EditTaskModal.style.display = 'none';
    TaskName.innerHTML = TextInputEdit.value;
})


// function to change the theme

var TaskNameArray = document.getElementsByClassName("task-name");
const CheckBoxTheme = document.getElementById("theme-input");
document.body.classList.remove("dark");
CheckBoxTheme.addEventListener("change", ValidationTheme)
var LabelTheme = document.getElementById("theme-label-text");

function ValidationTheme(){
    document.body.classList.toggle("dark");
    
    if(document.body.classList.contains("dark")){
        return LabelTheme.textContent = "Dark Theme";
    }
    return LabelTheme.textContent = "White Theme"; 

}