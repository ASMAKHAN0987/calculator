import {useState,useEffect} from 'react'

function useCurrencyInfo(currency){
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    async function fetchData(){
      try{
    const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

    // check if response is ok (200)
    if(!response.ok){
      throw new Error('Network response was not ok!');
    }
    // parse the response data as json
    const result = await response.json();
    setData(result[currency]);
    console.log(data);
    setLoading(false);
    }
    catch(e){
      setError(e);
      setLoading(false);
    }
    fetchData();
}},[currency])
console.log(data);
return data;
}

export default useCurrencyInfo