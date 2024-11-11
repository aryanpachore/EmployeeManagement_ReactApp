import React, { useContext, useEffect, useState } from 'react';
import Login from './components/auth/Login';
import Employeedashboard from './components/Dashboard/Employeedashboard';
import Admindashboard from './components/Dashboard/Admindashboard';
import { getLocalstorage, setLocalstorage } from './utils/localStorage';
import { AuthContext } from './context/Authprovider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext); // Use authData instead of userData for clarity

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setLoggedInUserData(loggedInUser.data);
      }
    }
  }, [authData]); // Include authData as a dependency

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin' ? <Admindashboard /> : user === 'employee' ? <Employeedashboard /> : null}
    </>
  );
};

export default App;
