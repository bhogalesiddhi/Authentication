import axios from 'axios';
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const history = useNavigate();
   const [email,setEmail] = useState('')
   const[password,setPassword]=useState('')
   const [rootuser,setUser] = useState({})
 
  
axios.defaults.withCredentials = true;
async function submit(e){
  e.preventDefault();
  try{
    await axios.post("http://localhost:8080/api/users/login",{
      email,password
    })
    .then(res => {
      if(res.data.message === "Login successfull" )
      {
        // localStorage.setItem('jwtToken', res.data.token); 
        // console.log(res.data.user) 
        // setUser(res.data.user)
        // console.log(rootuser)
        history("/")
      }else if(res.data === "Password incorrect")
      {
        alert("Incorrect password")

      }
      else if(res.data === "notexists"){
        alert("User is not have signed in")
      }
    })
    .catch(e => {
      alert("Wrong credentials")
      console.log(e)
    })
  }
  catch(e){
    console.log(e)
  }
}


  return (
    <div>
        <h3>Login Form</h3>
        <br></br>
        <form method='post'>
           
            <input type='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} id='' name=''></input>
            <br></br>
            <br></br>
            <input type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} id='' name=''></input> 
            <br></br>
            <br></br>
            <input type='submit' onClick={submit}></input>
        
        </form>
    </div>
  )
}

export default Login