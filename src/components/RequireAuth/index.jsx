import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
