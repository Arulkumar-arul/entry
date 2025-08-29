function addtask(){
    const taskvalue=document.getElementById("task").value;
    if(taskvalue.trim()===""){
        alert("Please enter the a value")
    }
    const newtask=document.createElement("li");
    newtask.innerText=taskvalue
    document.getElementById("input").appendChild(newtask);
    document.getElementById("task").value="";
}


