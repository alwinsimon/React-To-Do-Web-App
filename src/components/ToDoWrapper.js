import React, {useState} from 'react'
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {v4 as uuidv4} from 'uuid';
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

  return (
    
    <div className="ToDoWrapper">
      
      <h1>My To-Do List</h1>

      <ToDoForm addToDo={addToDo} />

      {toDoList.map( (toDoListItem, index) => (

        <ToDoList taskDetails={toDoListItem} key={index} />
      
      ))}

    </div>

  );

}


export default ToDoWrapper;
