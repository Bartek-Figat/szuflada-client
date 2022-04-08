import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const isAuth =
  typeof window.localStorage.token === 'string' && window.localStorage.token.length > 0;

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  console.log('children', children);
  console.log('location -> 9', location);
  return typeof window.localStorage.token === 'string' ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

// export const ProtectedRoute = ({ children }) => {
//   const location = useLocation();
//   let auth = window.localStorage.token === 'string' && window.localStorage.token.length > 0;
//   if (auth) {
//     return <Navigate to="/admin" state={{ from: location }} replace />;
//   }

//   return children;
// };
