import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, Whisper } from 'rsuite';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { signupUser } from '../slice/slice';
import { Input } from '../atomic/atoms/input/index';
import { Button } from '../atomic/atoms/button/index';
import { Form } from '../atomic/molecues/form/index';
import { Label } from '../atomic/atoms/label';

const userSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, 'User name must be at least 3 characters long')
    .max(20, 'User name cannot be longer than 20 characters')
    .required('Name is required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required('Confirm Password is required'),
});

export const RegisterUserForm = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state);
  console.log('login =>', login);

  return (
    <div className="flex w-screen h-screen">
      <Formik
        initialValues={{ userName: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={async (values, actions) => {
          const { userName, email, password, confirmPassword } = values;
          const data = {
            userName,
            email,
            password,
            confirmPassword,
          };
          dispatch(signupUser(data));
          actions.resetForm({
            values: {
              userName: '',
              email: '',
              password: '',
              confirmPassword: '',
            },
          });
        }}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <div className="flex flex-col w-1/4 mx-auto pt-12 bg-white">
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="userName">Name</Label>
              <Input
                id="userName"
                type="text"
                name="userName"
                placeholder="John Smith"
                onBlur={handleBlur}
                value={values.userName}
                onChange={(e) => {
                  handleChange(e);
                }}
                style={{ borderColor: errors.userName && touched.userName ? 'red' : null }}
              />
              <ErrorMessage name="userName">
                {(msg) => <div className="text-red-500  px-2">{msg}</div>}
              </ErrorMessage>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                onBlur={handleBlur}
                value={values.email}
                onChange={(e) => {
                  handleChange(e);
                }}
                style={{ borderColor: errors.email && touched.email ? 'red' : null }}
              />
              <ErrorMessage name="email">
                {(msg) => <div className="text-red-500  px-2">{msg}</div>}
              </ErrorMessage>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                }}
                style={{ borderColor: errors.password && touched.password ? 'red' : null }}
              />
              <ErrorMessage name="password">
                {(msg) => <div className="text-red-500 px-2">{msg}</div>}
              </ErrorMessage>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Password"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                }}
                style={{
                  borderColor: errors.confirmPassword && touched.confirmPassword ? 'red' : null,
                }}
              />
              <ErrorMessage name="confirmPassword">
                {(msg) => <div className="text-red-500  px-2">{msg}</div>}
              </ErrorMessage>
              <Button type="submit" disabled={isSubmitting}>
                {' '}
                Register{' '}
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
