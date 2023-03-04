import React from "react";
import { Link } from "react-router-dom";

const Page2: React.FC = () => {
  return(
    <>
      <h1>This is Page2</h1>
      <Link to='/'>Homeへ戻る</Link>
    </>
  )
}

export default Page2
