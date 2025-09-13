import React from 'react'
import { useNavigate } from 'react-router-dom'
function Navigate() {
    const navigate=useNavigate();
  return (
    <>
   <div className="container p-4">
   <h1>Login for More...<button class="btn btn-primary btn-lg btn-block ms-3 bg-grey" onClick={()=>navigate('login')}>Login</button></h1>
    
   </div>
    </>
  )
}

export default Navigate