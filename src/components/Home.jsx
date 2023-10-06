import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

const Home = () => {
  const user = useSelector(state => state.user.currentUser);
  console.log(user);
  return (
    <div>
    <h4>Hello {user.username} </h4>
    <br></br>
    <br></br>
    <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Home