import React from 'react'
import { ACTIONS } from './UserReducer2'
const AddTodo = ({todo,dispatch}) => {
  return (
    <div className="child">
        <span style={{color:todo.complete? '#AAA' : '#000'}} className='list'>{todo.name}</span>
        <button onClick={()=>dispatch({type:ACTIONS.TOOGLE_TODO,payload:{id:todo.id}})}>Toggle</button>
        <button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>Delete</button>
    </div>
    // dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}});
  )
}

export default AddTodo