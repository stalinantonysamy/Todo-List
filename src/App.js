import react, {useState} from 'react';
import './App.css';

const App = () => {
  
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);

  const [editid, setEditId] =useState(0);

  const handleSubmit =(e) =>{

    e.preventDefault();

    if(editid){
      const editTodo = todos.find((i) => i.id === editid);
      const updatedTodos= todos.map((t) => t.id===editTodo.id?(
        t={id:t.id, todo}): {id:t.id, todo:t.todo}
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if(todo !== ''){

      setTodos([{ id: `${todo}-${Date.now()}`, todo}, ...todos])
      setTodo("");
    }


  }
   

  const handleDelete = (id) =>{

    const delTodo=todos.filter((to)=>to.id !== id)
    setTodos([...delTodo]);
  }

  const handleEdit =(id)=>{
    const editTodo = todos.find((i)=> i.id === id)
    setTodo(editTodo.todo);
    setEditId(id);
  }
  return (
    
    <div className="App"> 
    <div className="container"> 
    <h1> Todo List App </h1>
    <br/>

    <form className="todoform" onSubmit={handleSubmit}>
      
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button type='submit'> {editid ? "Edit": "Go"}</button>
      </form>    
      <br/>
      <ul className="alltodos">
        {

          todos.map((t) =>(

            <li className="singletodos">

          <span className="todostext" key={t.id}> {t.todo} </span>
          <button onClick={() => handleEdit(t.id)}> Edit </button>
          <button onClick={()=> handleDelete(t.id)}> Delete </button>
        </li>
        

          ))}
        

      </ul>
      </div>
    </div>
  );
};

export default App;
