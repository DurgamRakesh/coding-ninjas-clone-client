import React, { useEffect, useState } from 'react'
import MainContainer from './components/maincon/MainContainer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [loading,setLoading]=useState(true)
  // const [logged,setLogged]=useState(false)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //       setLoading(false)
  //   },2000)
  //   if(localStorage.getItem("Token")){
  //     setLogged(true)
  //   }else{
  //     setLogged(false)
  //   }
  // },[logged])

  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
    },2000)
  },[])
  return (
    < >
    <Routes>
    <Route path="/" element={loading ?<div style={{height:"100vh",justifyContent:"center",alignItems:"center"}} className="animation-loading"><img className="animation-loading-img" src="https://successinsightsindia.com/wp-content/uploads/2022/02/Coding-Ninjas-Logo.jpg" width={500}alt=""/></div>:<MainContainer/>}/>
    </Routes>
    
    </>
  )
}

export default App