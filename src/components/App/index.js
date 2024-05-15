import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  //authentication
  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
  }, []);

  return (

    //if isAuthenticated is true it navigates to dashboard else it stays in login page
    <>
      {isAuthenticated ? (
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
