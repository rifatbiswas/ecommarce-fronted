
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Manu from './components/nav/Manu';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <div>
    
     <Manu/>
      <Toaster/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
        </Routes> 
        
        </div>
    
  );
}

export default App;
