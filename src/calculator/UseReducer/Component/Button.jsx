import React from 'react'
import { ACTION } from '../../CalculatorMain';
const Button = ({digit,dispatch}) => {
  return (
    <>
    {/* {console.log("liejie",digit)} */}
    <button onClick={()=>dispatch({type:ACTION.ADD_DIGIT,payload:{num:digit}})}>{digit}</button>
    </>
  )
}

export default Button