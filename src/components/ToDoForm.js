import React, {useState} from 'react'

const ToDoForm = () => {

  const toDoFormPlaceholder = "Jot in your next big thing here...";

  const [formValue, setFormValue] = useState("");

  const handleToDoFormSubmission = e => {
    
    e.preventDefault();
    
    console.log(formValue);
    
  }

  return (

    <form className='ToDoForm' onSubmit={handleToDoFormSubmission}>

      <input type='text' className='ToDo-form-input' placeholder = {toDoFormPlaceholder} onChange={(e)=> setFormValue(e.target.value)} />

      <button type='submit' className='todo-form-submit-btn'> Add Task </button>

    </form>

  )
}


export default ToDoForm;