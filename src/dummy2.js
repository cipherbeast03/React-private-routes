import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, loggedIn, ...rest }) => {
  const [token, setToken] = useState('');
  // useEffect(() => {
  //   localStorage.getItem('loggedIn');
  //   if ((loggedIn = true)) {
  //     token = true;
  //   } else {
  //     token = false;
  //   }
  // }, []);
  let auth = { token: false };
  return auth.token ? (
    <Outlet />
  ) : (
    <div>
      <Navigate to="/login" />
    </div>
  );
};
export default PrivateRoutes;
