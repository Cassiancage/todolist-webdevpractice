const inputbox = document.querySelector(".itembox input");
const addbtn = document.querySelector(".itembox button");
const todolist = document.querySelector(".todolist");


inputbox.onkeyup =()=>{ 
    let userData = inputbox.value;
    if(userData.trim() !=0){
        addbtn.Classlist.add("active");
    }
    else{
        addbtn.Classlist.remove("active");
    }
}

showTasks();

addbtn.onclick = ()=>{
    let userData = inputbox.value;
    let getlocalstorage = localStorage.getItem("new todo");
    if(getlocalstorage == null){
        listArr =[];
    }else{
        listArr = JSON.parse(getlocalstorage);
    }    
    listArr.push(userData);
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showTasks();
    
}


function showTasks(){
    let getlocalstorage = localStorage.getItem("new todo");
    if(getlocalstorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getlocalstorage);
    }
    let newLitag = "";
    listArr.forEach((element, index) => {
        newLitag += `<li> ${element} <span onclick ="deletetask(${index})";><i class="fas fa-trash-alt"></i></span></li>`;
    });

    todolist.innerHTML = newLitag;
    inputbox.value = "";

}    

function deletetask(index){
    let getlocalstorage = localStorage.getItem("new todo");
    listArr = JSON.parse(getlocalstorage);
    listArr.splice(index, 1);
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showTasks();
}

