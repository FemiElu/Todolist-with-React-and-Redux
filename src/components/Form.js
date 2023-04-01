import React,{useState, useEffect} from 'react';
import "../index.css"
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';

export const Form = ({editFormVisibility, editTodo, cancelUpdate}) => {

  const dispatch = useDispatch();

  const [todoValue, setTodoValue]=useState('');

  const [editValue, setEditValue]=useState('');

  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo])

  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }

  // update form submit
  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
      {editFormVisibility===false?(
        
        <form className='form-group custom-form text-primary' onSubmit={handleSubmit}>
          <div className='input-and-btn'>
              <input type="text" className='form-control text-primary' required
              value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
              <button type="submit" className='btn btn-primary btn-md ms-1'>+</button>
          </div>
        </form>
      ):(
        <form className='form-group custom-form' onSubmit={editSubmit}>
          <div className='input-and-btn'>
              <input type="text" className='form-control'  required
              value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
              <button type="submit" className='btn btn-secondary btn ms-1'>UPDATE</button>
          </div>
          <button type="button" className='btn btn-primary btn-md back-btn'
          onClick={cancelUpdate}>BACK</button>
        </form>
      )}
    </>
  )
}
