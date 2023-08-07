import React, {useState} from 'react'

const EditToDoForm = ({editToDo, taskDetails}) => {

  const toDoFormPlaceholder = "Update your task here...";

  const [formValue, setFormValue] = useState(taskDetails.task);

  const handleToDoFormSubmission = (e) => {
    
    e.preventDefault();

    editToDo(formValue, taskDetails.id);

    setFormValue("");

  }

  return (

    <form className='ToDoForm' onSubmit={handleToDoFormSubmission}>

      <input type='text' className='ToDo-form-input' placeholder = {toDoFormPlaceholder} value={formValue} onChange={(e)=> setFormValue(e.target.value)} />

      <button type='submit' className='todo-form-submit-btn'> Update Task </button>

    </form>

  )
}


export default EditToDoForm;