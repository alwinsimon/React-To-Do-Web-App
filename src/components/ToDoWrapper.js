import React, {useState} from 'react'
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {v4 as uuidv4} from 'uuid';
import EditToDoForm from './EditToDoForm';
uuidv4();

const ToDoWrapper = () => {

  const [toDoList, setToDoList] = useState([]);

  const addToDo = (newFormSubmission) => {

    const newDataToInsert = {
      
      id: uuidv4(),
      task: newFormSubmission,
      completed: false,
      isEditing: false

    }

    // Update the existing to-do list array with the new data received from the form submission
    setToDoList([...toDoList, newDataToInsert]);

  }

  const changeTaskCompletionStatus = (taskId) => {

    setToDoList(toDoList.map((individualTask)=> individualTask.id === taskId ? {...individualTask, completed: !individualTask.completed} : individualTask));

  }

  const deleteIndividualTask = (taskId) => {
    
    setToDoList(toDoList.filter((individualTask)=> individualTask.id!== taskId));
  
  }

  const editIndividualTask = (taskId) => {

    setToDoList(toDoList.map((individualTask)=> individualTask.id === taskId ? {...individualTask, isEditing: !(individualTask.isEditing)} : individualTask));
  
  }

  const modifyIndividualToDoTask = (editToDoFormSubmission, taskId) => {

    setToDoList(toDoList.map((individualTask) => individualTask.id === taskId ? {...individualTask, task: editToDoFormSubmission, isEditing: !(individualTask.isEditing) } : individualTask))
  
  }





  return (
    <div className="ToDoWrapper">

      <h1>My To-Do List</h1>

      <ToDoForm addToDo={addToDo} />

      {toDoList.map((toDoListItem, index) =>
        
        toDoListItem.isEditing ? (

          <EditToDoForm editToDo={modifyIndividualToDoTask} taskDetails={toDoListItem} />
        
        ) : (

          <ToDoList taskDetails={toDoListItem} key={index} toggleTaskCompletionStatus={changeTaskCompletionStatus} editTask={editIndividualTask} deleteTask={deleteIndividualTask} />

        )

      )}

    </div>
  );

}


export default ToDoWrapper;
