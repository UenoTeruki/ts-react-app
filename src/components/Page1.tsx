import React from "react"
import { Link } from "react-router-dom"

const Page1: React.FC = () => {
  return(
    <>
      <h1>This is Page1</h1>
      <Link to='/'>Homeへ戻る</Link>
    </>
  )
}

export default Page1
