import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
