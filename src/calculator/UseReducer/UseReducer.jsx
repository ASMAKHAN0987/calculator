import React, { useReducer } from 'react'
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}
const reducer = (state,action)=>{
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count:state.count+1}
        case ACTIONS.DECREMENT:
            return {count:state.count-1}
        default:
             return state.count    
        }

}
const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer,{count:0});
    const increment = ()=>{
        dispatch({type:ACTIONS.INCREMENT});
    }
    const decremnt = ()=>{
        dispatch({type:ACTIONS.DECREMENT})
    }
  return (
    <>
      <button onClick={increment}>count</button>
      <span>{state.count}</span>
      <button onClick={decremnt}>count</button>
    </>
  )
}

export default UseReducer