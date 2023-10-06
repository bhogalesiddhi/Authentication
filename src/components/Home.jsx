import React from 'react'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

const Home = () => {
  // const location = useLocation();
  return (
    <div>
    <h4>Hello {} </h4>
    <br></br>
    <br></br>
    <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Home