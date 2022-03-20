import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const isAuth =
  typeof window.localStorage.token === 'string' &&
  window.localStorage.token.length > 0 &&
  !!localStorage.getItem('token');

export const ProtectedRoute = () => {
  const location = useLocation();
  return isAuth ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};
