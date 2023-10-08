const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask (){
    if(inputBox.value.trim() === ''){
        alert("You Must Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = " ";
    saveTasks();
}  

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI" ){
            e.target.classList.toggle("checked");
            saveTasks();
            
        }
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveTasks();
            
        }
    }, false)

    function saveTasks(){
        localStorage.setItem("tasks", listContainer.innerHTML);
    }
    function showTasks(){
        listContainer.innerHTML = localStorage.getItem("tasks");
    }
    showTasks();
    


