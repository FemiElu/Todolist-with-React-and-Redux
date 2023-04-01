import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const [editTodo, setEditTodo]=useState('');

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }


  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
      <div className='container'>
    <div className="wrapper">
      <br></br>
      <h1 className="text-center text-primary bold">TODOLIST</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <button className='btn btn-primary btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>Remove checked x</button>
      )}
    </div>
    </div>
  );
}

export default App;
