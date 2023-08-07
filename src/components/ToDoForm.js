import React, {useState} from 'react'

const ToDoForm = ({addToDo}) => {

  const toDoFormPlaceholder = "Jot in your next big thing here...";

  const [formValue, setFormValue] = useState("");

  const handleToDoFormSubmission = (e) => {
    
    e.preventDefault();
    
    addToDo(formValue);

    setFormValue("");

  }

  return (

    <form className='ToDoForm' onSubmit={handleToDoFormSubmission}>

      <input type='text' className='ToDo-form-input' placeholder = {toDoFormPlaceholder} value={formValue} onChange={(e)=> setFormValue(e.target.value)} />

      <button type='submit' className='todo-form-submit-btn'> Add Task </button>

    </form>

  )
}


export default ToDoForm;