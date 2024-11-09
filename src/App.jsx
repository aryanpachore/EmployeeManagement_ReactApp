import React, { useContext, useEffect, useState } from 'react';
import Login from './components/auth/Login';
import Employeedashboard from './components/Dashboard/Employeedashboard';
import Admindashboard from './components/Dashboard/Admindashboard';
import { getLocalstorage, setLocalstorage } from './utils/localStorage';
import { AuthContext } from './context/Authprovider';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLocalstorage();
    getLocalstorage();
  }, []); // Added dependency array

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
    } else if (email === 'user@me.com' && password === '123') {
      setUser('employee');
    } else {
      alert('Invalid credentials');
    }
  };

  const data = useContext(AuthContext)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? <Admindashboard /> : user === 'employee' ? <Employeedashboard /> : null}
    </>
  );
};

export default App;
