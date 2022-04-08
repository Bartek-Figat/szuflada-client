import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RegisterUserForm } from './componets/register';
import { Authentication } from './componets/auth';
import Main from './container/mainPage/main';
import { LoginForm } from './componets/login';
import { Admin } from './componets/admin';
import { ProtectedRoute } from './componets/protectedRoutes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/register"
          element={localStorage.getItem('token') ? <Navigate to="/admin" /> : <RegisterUserForm />}
        />
        <Route
          path="/login"
          element={localStorage.getItem('token') ? <Navigate to="/admin" /> : <LoginForm />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/activate/:token" element={<Authentication />} />
      </Routes>
    </>
  );
};

export default App;
