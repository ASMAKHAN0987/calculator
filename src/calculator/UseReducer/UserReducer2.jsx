import React, { useReducer ,useState} from 'react'
import AddTodo from './AddTodo';
import './Style.css';
export const ACTIONS = {
    ADD_TODO: 'addTodo',
    TOOGLE_TODO: 'toogleTodo',
    DELETE_TODO: 'deleteTodo'
}
const reducer = (todos,action)=>{
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos,newTodo(action.payload.name)];
        case ACTIONS.TOOGLE_TODO:
            console.log("asmak");
            return todos.map((todo)=>{
                if(todo.id === action.payload.id){ 
                  return {...todo,complete: !todo.complete}
                //   return {todo};
                //  console.log(todo.name);
                };
             return todo;
        }); 
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo)=>{
                return todo.id !== action.payload.id
            })
    }
}
const newTodo = (name)=>{
     return {id:Date.now(),name:name,complete:false}
}
const UserReducer2 = () => { 
    const [name,setName] = useState("");
   const [todos,dispatch] = useReducer(reducer,[]);
    console.log(todos);
   const handleSubmit = (e)=>{
      e.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}});
     setName("");
   }
  return (
    <div className='pro'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
        </form>
        {console.log(todos)}
        {todos.map((todo)=>{
           return <AddTodo key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
    </div>
  )
}

export default UserReducer2