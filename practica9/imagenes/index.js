const task = document.getElementById("task");
const list= document.querySelector(".list");

function clicked(){
    if(task.value==""){
        alert("Ingresa algo")

    }else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        list.appendChild(li);
        task.value="";
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);

    }
    saveData();
}

list.addEventListener("click",(e)=>{
    if(e.target.tagName === "Li"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElemnt.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",list.innerHTML);

}
function getData(){
    list.innerHTML = localStorage.getItem("data");
}
getData();