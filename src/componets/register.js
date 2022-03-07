import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { signupUser } from '../slice/slice';
import { Input } from '../atomic/atoms/input/index';
import { Button } from '../atomic/atoms/button/index';
import { Form } from '../atomic/molecues/from';
import { Label } from '../atomic/atoms/label';
import { FormContent } from '../atomic/molecues/index';

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
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome back.</h1>
              </div>
              {/* Form */}
              <div className="max-w-sm mx-auto">
                <Formik
                  initialValues={{
                    userName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                  }}
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
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <FormContent>
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
                          style={{
                            borderColor: errors.userName && touched.userName ? 'red' : null,
                          }}
                        />
                        <ErrorMessage name="userName">
                          {(msg) => <div className="text-red-500  px-2">{msg}</div>}
                        </ErrorMessage>
                      </FormContent>
                      <FormContent>
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
                          style={{
                            borderColor: errors.email && touched.email ? 'red' : null,
                          }}
                        />
                        <ErrorMessage name="email">
                          {(msg) => <div className="text-red-500  px-2">{msg}</div>}
                        </ErrorMessage>
                      </FormContent>
                      <FormContent>
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
                          style={{
                            borderColor: errors.password && touched.password ? 'red' : null,
                          }}
                        />
                        <ErrorMessage name="password">
                          {(msg) => <div className="text-red-500 px-2">{msg}</div>}
                        </ErrorMessage>
                      </FormContent>
                      <FormContent>
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
                            borderColor:
                              errors.confirmPassword && touched.confirmPassword ? 'red' : null,
                          }}
                        />
                        <ErrorMessage name="confirmPassword">
                          {(msg) => <div className="text-red-500  px-2">{msg}</div>}
                        </ErrorMessage>
                      </FormContent>
                      <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                          <Button type="submit" disabled={isSubmitting}>
                            {' '}
                            Register{' '}
                          </Button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 text-center mt-3">
                        By creating an account, you agree to the{' '}
                        <a className="underline" href="#0">
                          terms & conditions
                        </a>
                        , and our{' '}
                        <a className="underline" href="#0">
                          privacy policy
                        </a>
                        .
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
