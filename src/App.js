import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { RegisterUserForm } from './componets/register';
import { Authentication } from './componets/auth';
import Main from './componets/mainPage/main';
import { LoginForm } from './componets/login';
import { Admin } from './componets/admin';
import { ProtectedRoute } from './componets/protectedRoutes';
import { isAuth } from './componets/protectedRoutes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/register"
          element={isAuth ? <Navigate to="/admin" /> : <RegisterUserForm />}
        />
        <Route path="/login" element={isAuth ? <Navigate to="/admin" /> : <LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/activate/:token" element={<Authentication />} />
      </Routes>
    </>
  );
};

export default App;
