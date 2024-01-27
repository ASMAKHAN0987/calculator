import { useState,useMemo, useEffect } from "react"
const UseMemo = () => {
    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);
    const doubleNumber = useMemo(()=>{
        return slowFunction(number); },[number]);
    // const doubleNumber = slowFunction(number);
    const themeStyle = useMemo(()=>{
        return {        
        backgroundColor: dark?'black': 'white',
        color: dark? 'white': 'black'
    }},[dark]);
    useEffect(()=>{
        console.log('theme changed');
    },[themeStyle])
    //memo means memoization so it caching a value so you don't have to recompute it every single time so we can cache input value so if number doesn't change we don't need to recalculate our slow function over and over again
    // You don't have to memorize everything is because it does give you performance overheads and some 
    // your are  forcing your memory to get larger every time you use memo you have to store an additional variable in memory to store that previous value.
    //actually use memo when you need performance benefits when the function you are calling incredibly slow then useMemo is great
  return (
    <>
      <input type="number" value={number} onChange={ e => setNumber(e.target.value)}  className="border border-black"
      />
      <button onClick={()=> setDark(prevDark => !prevDark)} className="rounded hover:rounded-lg border p-3">change theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}
function slowFunction(num){
    console.log("calling slow function");
    console.log("ama");
    for(let i = 0 ;i < 100000000 ;i++){}
    return num * 2; 
}

export default UseMemo