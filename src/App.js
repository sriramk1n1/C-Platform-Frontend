import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Pages/Home'
import Question from './Pages/Question'


function App() {
  const [session, setSession] = useState(null);
  const [dark, setdark] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [z,setz] = useState("")


  return (
    <main className={dark ? "dark text-foreground bg-background" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home toggle={{ dark, setdark }} session={session} loggedin={loggedin} setlogin={setLoggedin} setz={setz} z={z}/>} />
          <Route path="/question/*" element={<Question toggle={{ dark, setdark }} session={session} loggedin={loggedin} setz={setz} z={z}/> } />

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;

