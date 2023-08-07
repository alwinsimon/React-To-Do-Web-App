import React, {useState} from 'react'
import ToDoForm from './ToDoForm';
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

    <div className='ToDoWrapper'>

      <ToDoForm addToDo={addToDo} />

    </div>

  );

}


export default ToDoWrapper;
