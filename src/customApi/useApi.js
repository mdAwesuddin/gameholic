import React from 'react'
import { useState,useEffect } from 'react';

const useApi = (URL) => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false);
    const [isError,setIsError]=useState(false);

    const makeAPICall=async()=>{
        setLoading(true);
        setIsError(false);
        try{
            const response=await fetch(URL);
            const comingData=await response.json();
            setData(comingData);
            setLoading(false);
            console.log(comingData)
        }catch(error){
            setIsError(true);
            setLoading(false)
        };
    };
    useEffect(()=>{
        makeAPICall(URL)
    },[])
  return [data,loading,isError];
}

export default useApi