import React,{useState} from "react";
function TODOLIST(){
    const[tasks,setTacks]=useState(["ABC", "DEY"]);
    const[newtacks,setNewTacks]=useState("");

function handleinputchange(event){
    setNewTacks(event.target.value);

}
function addtack(){
    if(newtacks.trim()!==""){
        setTacks(t=>[...t,newtacks]);
        setNewTacks("");
    }
    

}
function removetask(index){
const updatedTasks = tasks.filter((_,i)=> i !== index);
setTacks(updatedTasks);
}
function movetaskup(index){
    if(index > 0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
        setTacks(updatedTasks);
    }

}
function movetaskdown(index){
    if(index < tasks.length-1){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
        setTacks(updatedTasks);
    }
}
return(
    <div className="to-do-list">
        <h1>TO-DO-LIST</h1>

   
    <div>
        <input  type="text"
        value={newtacks}
        placeholder="enter the task"
        onChange={handleinputchange} />
        <button className="add-button"
        onClick={addtack}>
            add
        </button>
    </div> 
    <ol>
        {tasks.map((task,index)=>
        <li key={index}>
            <span className="text">{task}</span>
            <button onClick={()=>removetask(index)} className="delete-button">delete</button>
            <button onClick={()=>movetaskup(index)} className="moveup-button">moveup</button>
            <button onClick={()=>movetaskdown(index)} className="movedown-button">movedown</button>

        </li>)}
        </ol></div>
)}
export default TODOLIST