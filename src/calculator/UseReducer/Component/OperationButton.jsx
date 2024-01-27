import React from 'react'
import { ACTION } from '../../CalculatorMain';
const OperationButton = ({operation,dispatch}) => {
  return (
    <>
        <button onClick={()=>dispatch({type:ACTION.CHOOSE_OPERATION,payload:{num:operation}})}>{operation}</button>
    </>
  )
}

export default OperationButton