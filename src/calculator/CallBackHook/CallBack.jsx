import React, { useEffect, useState,useCallback } from 'react'

const CallBack = () => {
    const [number,setNumber] = useState(1);
    const [dark,setDark] = useState(false);
    const [items,setItems] = useState([]);
    const getItems = useCallback(()=>{
        return [number,number+1,number+2];
  },[number]);
    useEffect(()=>{
       setItems(getItems());
       console.log('updating items');
    },[getItems])
    
    {/* const getItems = ()=> {
       return [number,number+1,number+2];
    } */}
    // const theme = {
    //     backgroundColor: dark?'black': 'white',
    //     color: dark? 'white': 'black'
    // }
    const theme = useCallback(()=>{
        return {        
        backgroundColor: dark?'black': 'white',
        color: dark? 'white': 'black'
    }},[dark]);
    useEffect(()=>{
        console.log('theme changed');
    },[theme])
    return (
    <>
        <div style={theme()}>
            <input type="number" value={number} onChange={e=> setNumber(e.target.value)} className='border border-black bg-slate-500'/>
            <button onClick={()=>{
                setDark(prevDark => !prevDark)
            }} className='rounded hover:rounded-lg border p-3'>toogle theme</button>
        <div>
            {
        items.map((item)=>{
              return (
              <div key={item}>{item}</div>)
            })}
        </div>
        </div>
     </>
    )
}

export default CallBack