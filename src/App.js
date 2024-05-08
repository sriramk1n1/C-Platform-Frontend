import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Pages/Home'
import Question from './Pages/Question'
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
import { getToPathname } from '@remix-run/router';

function App() {
  const [session, setSession] = useState(null);
  const [dark, setdark] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [z,setz] = useState("")

  useEffect(() => {
    const c = document.cookie.split("=")[1]
    if (typeof c !== 'undefined'){
      fetch(`${process.env.REACT_APP_API_URL}/session`, {
        method: 'POST',
        credentials: 'include',
      }).then(response => response.json()).then(data => {
        setSession(data)    
        console.log('ddd',data)
      }).catch(error => {
      });
      setLoggedin(true)
    }else{
      if (window.location.pathname==="/login" || window.location.pathname==="/register"){}
      else{
        window.location.href = "/login"
      }
    }
    console.log('fetched--------------------------------')
  },[z])


  return (
    <main className={dark ? "dark text-foreground bg-background" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home toggle={{ dark, setdark }} session={session} loggedin={loggedin} setlogin={setLoggedin} setz={setz} z={z}/>} />
          <Route path="/question/*" element={<Question toggle={{ dark, setdark }} session={session} loggedin={loggedin} setz={setz} z={z}/> } />
          <Route path="/login" element={<Login toggle={{ dark, setdark }} session={session} loggedin={loggedin} setlogin={setLoggedin} />} />
          <Route path="/register" element={<Register toggle={{ dark, setdark }} session={session} loggedin={loggedin} />} />
          <Route path="/logout" element={<Logout setlogin={setLoggedin} />} />

        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

