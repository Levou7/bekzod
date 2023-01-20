import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Settings from './components/Settings/Settings';
import About from './pages/About/About';
import Login from './pages/Login/Login';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);

  useEffect(()=>{
    if(window.sessionStorage.getItem('pass') !== 'togri'){
      navigate('/login')
    }
    if(window.sessionStorage.getItem('pass') == 'guest'){
      navigate('/')
    }
  },[location.pathname])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
