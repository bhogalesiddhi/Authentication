import { useEffect, useState } from "react";
import React from "react";
import "./Profile.css";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

const Profile = () => {

  const history = useNavigate();
  const [auth,setAuth] = useState(false)
  // const [message,setMessage] = useState('')

  const callProfile = async () => {
    try{
      const res =  await axios.get("http://localhost:5000/api/users/profile")
      const data =  res.data
      setAuth(true)
      console.log(data)
      
      if(!res.status === 200){
        setAuth(false)
       }


    }catch(err) {
      console.log(err)
      history("/login")
     }
     
   
  }
  
  useEffect(() => {
    
    callProfile();
  },[])
  return (
    // <div>
    // {
    //   auth ? 
    // <div className="profile">
    //   <h3>Your Profile</h3>
    //   <div className="profileWrapper">
    //     <div className="userInfomation">
    //       <div className="userInfo">
    //         <span className="infoKey">Username: </span>
    //         <span className='infoValue' >Shivani</span>
    //       </div>
    //       <div className="userInfo">
    //         <span className="infoKey">Email: : </span>
    //         <span className='infoValue' >shiva</span>
    //       </div>
    //       <div className="userInfo">
    //         <span className="infoKey">Contact No. </span>
    //         <span className='infoValue' >shiva</span>
    //       </div>
    //       <div className="userInfo">
    //         <span className="infoKey">Skills: </span>
    //         <span className='infoValue' > shiva</span>
    //       </div>
    //     </div>
    //     <br></br>
    //     <br></br>
    //     <Link to="/">Home page</Link>
    //   </div>
    // </div>
    // :
    // <div>
    //   <h3>{}</h3>
    //   <h3>Login now</h3>
    //   <Link to='/login'>Login</Link>
    // </div>
    // }
    // </div>
    <div>
    {
      auth ? 
    <div className="profile">
      <h3>Your Profile</h3>
      <div className="profileWrapper">
        <div className="userInfomation">
          <div className="userInfo">
            <span className="infoKey">Username: </span>
            <span className='infoValue' >Shivani</span>
          </div>
          <div className="userInfo">
            <span className="infoKey">Email: : </span>
            <span className='infoValue' >shiva</span>
          </div>
          <div className="userInfo">
            <span className="infoKey">Contact No. </span>
            <span className='infoValue' >shiva</span>
          </div>
          <div className="userInfo">
            <span className="infoKey">Skills: </span>
            <span className='infoValue' > shiva</span>
          </div>
        </div>
        <br></br>
        <br></br>
        <Link to="/">Home page</Link>
      </div>
    </div>
    :
    <div>
      <h3>{}</h3>
      <h3>Login now</h3>
      <Link to='/login'>Login</Link>
    </div>
    }
    </div>
  );
};

export default Profile;
