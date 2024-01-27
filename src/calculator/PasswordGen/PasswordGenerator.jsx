import React, { useCallback, useEffect, useState,useRef } from 'react'

const PasswordGenerator = () => {
   const [length,setLength] = useState(8);
   const [numberAllowed,setnumberAllowed] = useState(false);
   const [charAllowed,setCharAllowed] = useState(false);
   const [password,setPassword] = useState("");
//    useRef hook
const passwordRef = useRef(null);
   const PasswordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    numberAllowed? str += "0123456789":"";
    console.log("hello");
    charAllowed? str += "@#%^^(^)(_&^$`%$#@!{":"";
       for (let i = 1; i <=length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        // pass += str[char] it returns undefined when it go to over range of string or index
        // when you are certain that the index is within the valid range.
        // console.log(pass);
       }
       setPassword(pass);
   },[length,numberAllowed,charAllowed,setPassword])
    //clip board
    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,2);
        window.navigator.clipboard.writeText(password);
    },[password])
   useEffect(()=>{
      PasswordGenerator();
      console.log("hecccllo");
   },[length,numberAllowed,charAllowed,PasswordGenerator])
  return (
     <>
    {/* <h1 className='text-6xl'>PasswordGenerator</h1> */}
     <div className="password">
        <input type="text" className='input'
        value={password} readOnly placeholder='password' ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard}>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer mt-10' onChange={(e)=> setLength(e.target.value)}/>
            <label>Length:{length}</label>
        </div>
        <div  className='flex items-center gap-x-2'>
        <input type="checkbox" defaultChecked={numberAllowed} className='cursor-pointer mt-10' onChange={()=> setnumberAllowed((prev)=>!prev)}/>
        <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-2'>
        <input type="checkbox" defaultChecked={charAllowed} className='cursor-pointer mt-10' onChange={()=> setCharAllowed((prev)=>!prev)}/>
        <label htmlFor='numberInput'>characters</label>
        </div>
     </div>
     </>
    )
}

export default PasswordGenerator