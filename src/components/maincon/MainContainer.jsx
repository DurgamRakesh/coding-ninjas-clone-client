import React from 'react'
import './Maincss.css'
import Header from '../header/Header'
import FirstContainer from '../firstcontainer/FirstContainer'
import SecondContainer from '../firstcontainer/SecondContainer'
import Footer from '../footer/Footer'
const MainContainer = () => {
  return (
    <>
    <div className='main-container'>
        <Header/>
        <FirstContainer/>
        <SecondContainer/>
        <Footer/>
    </div>
    </>
  )
}

export default MainContainer