import React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return(
    <>
      <h1>This is Home</h1>
      <ul>
        <li><Link to='page1'>Page1へ移動</Link></li>
        <li><Link to='page2'>Page2へ移動</Link></li>
      </ul>
    </>
  )
}

export default Home
