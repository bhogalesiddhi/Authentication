import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element ={<Signup/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
