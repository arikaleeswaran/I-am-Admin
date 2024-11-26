import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'

function Home() {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          home Container</div>
    </div>
  )
}

export default Home