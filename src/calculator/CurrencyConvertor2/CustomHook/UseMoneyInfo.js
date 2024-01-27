import { useState,useEffect } from "react";

 export function useMoneyInfo (currency) {
  
  const [data, setData] = useState({})
  const useApi = async ()=>{
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData[currency]);
  }
  useEffect(()=>{
    useApi();
},[currency])
  // useApi();
   return data
 }