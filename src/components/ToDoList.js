import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const ToDoList = ({taskDetails, toggleTaskCompletionStatus, editTask, deleteTask}) => {
  
  return (

    <div className='ToDoItemsListView'>

      <p onClick={()=>toggleTaskCompletionStatus(taskDetails.id)} className={ `${ taskDetails.completed ? "completed-tasks" : "" }` } >{taskDetails.task}</p>

      <div>

        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTask(taskDetails.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTask(taskDetails.id)} />

      </div>

    </div>

  );

}


export default ToDoList;
