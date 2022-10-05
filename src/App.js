import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';
import Header from './components/other/header/Header';
import NotFound from './components/pages/404/NotFound';
import Login from './components/pages/login/Login';
import Footer from './components/other/footer/Footer';

export const UserContext = React.createContext();

function App() {

  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Header/>
        <hr className='mt-0 mb-3'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;