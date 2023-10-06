import axios from 'axios';
import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/userRedux'; // Update the import path


const Login = () => {
const dispatch = useDispatch();
const history = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { isFetching, error } = useSelector((state) => state.user);

const handleClick = async (e) => {
  e.preventDefault();
  dispatch(loginStart()); // Dispatch the loginStart action before making the API call

  try {
    const res = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password,
    });
    dispatch(loginSuccess(res.data.user)); // Dispatch the loginSuccess action with the user data
    history("/"); // Redirect to the desired route
  } catch (err) {
    dispatch(loginFailure()); // Dispatch the loginFailure action in case of an error
  }
};


axios.defaults.withCredentials = true;
// async function submit(e){
//   e.preventDefault();
//   try{
//     await axios.post("http://localhost:5000/api/users/login",{
//       email,password
//     })
//     .then(res => {
//       if(res.data.message === "Login successfull" )
//       {
//         // localStorage.setItem('jwtToken', res.data.token); 
//         console.log(res.data.user) 
//         // setrootUser(res.data.user)
//         // console.log(rootuser)
//         history("/")
//       }else if(res.data === "Password incorrect")
//       {
//         alert("Incorrect password")

//       }
//       else if(res.data === "notexists"){
//         alert("User is not have signed in")
//       }
//     })
//     .catch(e => {
//       alert("Wrong credentials")
//       console.log(e)
//     })
//   }
//   catch(e){
//     console.log(e)
//   }
// }


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
            <input type='submit' onClick={handleClick} disabled={isFetching}></input>
        
        </form>
    </div>
  )
}

export default Login