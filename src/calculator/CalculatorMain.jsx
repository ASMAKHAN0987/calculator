import React, { useReducer, useState } from 'react'
import Button from './UseReducer/Component/Button';
// import './Style.css';
import OperationButton from './UseReducer/Component/OperationButton';
export const ACTION = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION:"choose-operation",
  CLEAR: 'clear',
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate"
}
const reducer = (state,action) =>{  
  switch(action.type){
    case ACTION.ADD_DIGIT:
      if(action.payload.num === "." && state.currentOperand == null) return state;
      if(state.overwrite){
        return {...state,currentOperand:action.payload.num,overwrite:false}
      }
      if(action.payload.num === "0" && state.currentOperand === "0") return state;
      if(action.payload.num === "." && state.currentOperand.includes(".")) return state;
      return {...state,currentOperand:`${state.currentOperand || ""}${action.payload.num}`}
      case ACTION.CHOOSE_OPERATION:
         if(state.currentOperand == "" && state.previousOperand == ""){
           return state;
         }
          if(state.previousOperand==null){
            return {...state,previousOperand:state.currentOperand,currentOperand:null,operation:action.payload.num}
          }   
          if(state.operation!=null && state.currentOperand == null){
            return{...state,operation:action.payload.num}
          }
          return {
            ...state,
            operation:action.payload.num
          }
          case ACTION.EVALUATE:
            if(state.operation == null || state.currentOperand == null || state.previousOperand == null) return state;
            return{
              ...state,
              overwrite:true,
              previousOperand:null,
              currentOperand:evaluate(state),
              operation: null,
            }
            case ACTION.DELETE_DIGIT:
               if(state.overwrite){
                return {}
               }
               if(state.currentOperand == null) 
               return state;
               if(state.currentOperand.length === 1) 
               return {...state,currentOperand:null}
               return {...state,currentOperand:state.currentOperand.slice(0,-1)}
          case ACTION.CLEAR:
         return {}
  }
}
function evaluate({currentOperand,previousOperand,operation}){
  const curr = parseFloat(currentOperand);
  const prev = parseFloat(previousOperand);
  if(isNaN(curr) || isNaN(prev)){
    return ""
  }
  let computations = "";
  switch(operation){
    case "+":
       computations = curr + prev;
       break;
       case "-":
        computations = prev-curr;
        break; 
        case "*":
          computations = curr * prev;
          break;
          case "/":
            computations =  prev/curr;
            break;      
         }
         return computations.toString();
}
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us",{
  maximumFractionDigits:0,
})
function formatOperand(operand){
  if(operand == null) return
  const [integer,decimal] = operand.split('.');
  if(decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}
const calculatorMain = () => {
  const [{currentOperand,previousOperand,operation},dispatch] = useReducer(reducer,{})
  return (
    <div className='calculator-grid'>
    <div className='output'>
      <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
      <div className="current-operand"> {formatOperand(currentOperand)}</div>
      
    </div>
    <button className='span-two' onClick={()=>dispatch({type:ACTION.CLEAR})}>AC</button>
    <button onClick={()=>dispatch({type:ACTION.DELETE_DIGIT})}>DEL</button>
    <OperationButton operation="/" dispatch={dispatch}/>
    <Button digit={"1"} dispatch={dispatch}/>
    <Button digit={"2"} dispatch={dispatch}/>
    <Button digit={"3"} dispatch={dispatch}/>
    <OperationButton operation="+" dispatch={dispatch}/>
    <Button digit={"4"} dispatch={dispatch}/>
    <Button digit={"5"} dispatch={dispatch}/>
    <Button digit={"6"} dispatch={dispatch}/>
    <OperationButton operation="*" dispatch={dispatch}/>
    <Button digit={"7"} dispatch={dispatch}/>
    <Button digit={"8"} dispatch={dispatch}/>
    <Button digit={"9"} dispatch={dispatch}/>
    <OperationButton operation="-" dispatch={dispatch}/>
    <Button digit={"."} dispatch={dispatch}/>
    <Button digit={"0"} dispatch={dispatch}/>
    <button className='span-two' onClick={()=>dispatch({type:ACTION.EVALUATE})}>=</button>

</div>
  )
}

export default calculatorMain