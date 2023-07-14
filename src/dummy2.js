import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let auth = { token: false };
  return auth.token ? (
    <Outlet />
  ) : (
    <div>
      {alert('Please login or sign up')}
      <Navigate to="/login" />
    </div>
  );
};
export default PrivateRoutes;
