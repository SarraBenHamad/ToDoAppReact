import React,{useState} from "react"

function ToDoList(){

    const [tasks,setTasks]=useState([]);
    const [newTask ,setNewTask]= useState("");

    function addTask(){
        if(newTask.trim() !==""){
            setTasks(t => [...t ,newTask]);
            setNewTask("");
        }
    }
    function handleInputChange(event){
        setNewTask(event.target.value)

    }
    function deleteTask(index){
        const updatedTasks= tasks.filter((_,i) => i!==index);
        //filter fl aada tekhout filter(element,index) mais maanech elemnt so n3awdhouh b _
        //bch tekhou tasks lkol wakt i(compteur al tasks) different ml index li bch nfaskhouh
        setTasks(updatedTasks);

    }
    function moveTaskUp(index){
        if(index>0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
        }


    }
    function moveTaskDown(index){
        if(index< tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
            }
        
    }



    return(
        <div className="to-do_list">
            <h1>TO DO APP</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button 
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
                <ol>
                    { tasks.map((task,index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskUp(index)}>
                                UP
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskDown(index)}>
                                DOWN
                            </button>

                        </li>

                    
                    
                    
                    
                    )}


                </ol>

            </div>
        </div>
    )
}
export default ToDoList