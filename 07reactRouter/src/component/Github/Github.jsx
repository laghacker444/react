import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  /*method by using loader*/

  const data=useLoaderData()

  /*method by using useEffect*/

  const [data1,setdata]=useState([]) 
  useEffect(() => {
     fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
     .then(res=>res.json())
     .then(data1=>{
       setdata(data1.usd)
     })
  }, []) 

  
  
  return (
    <>
    <div>Github follower:{data1.inr}</div>
    <div>Github follower:{data.date}</div>
    </>
  )
}

export default Github
export const getapi=async()=>{
  const res=await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
  return res.json()
}