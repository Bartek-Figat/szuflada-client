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
import { Header } from '../partials/nav';

const userSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(20, 'Name cannot be longer than 20 characters')
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

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome back.</h1>
              </div>

              {/* Form */}
              <div className="max-w-md mx-auto">
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
                      {login.status === 'success' && login.success !== '' ? (
                        <div
                          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                          role="alert"
                        >
                          <div class="flex">
                            <div class="py-1">
                              <svg
                                class="fill-current h-6 w-6 text-teal-500 mr-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                              </svg>
                            </div>
                            <div>
                              <p class="text-sm">{login.success}</p>
                            </div>
                          </div>
                        </div>
                      ) : null}
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
                          {(msg) => <div className="text-red-500 text-md italic">{msg}</div>}
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
                          {(msg) => <div className="text-red-500 text-md italic">{msg}</div>}
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
                          {(msg) => <div className="text-red-500 text-md italic">{msg}</div>}
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
                          {(msg) => <div className="text-red-500 text-md italic">{msg}</div>}
                        </ErrorMessage>
                      </FormContent>
                      {login.status === 'loading' && login.success === '' ? (
                        <div className="flex flex-wrap -mx-3 mt-6">
                          <div className="w-full px-3">
                            <button
                              type="button"
                              class="btn text-white bg-blue-600 hover:bg-blue-700 w-full p-2 rounded-sm"
                              disabled
                            >
                              Processing...
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap -mx-3 mt-6">
                          <div className="w-full px-3">
                            <Button type="submit" disabled={isSubmitting}>
                              {' '}
                              Register{' '}
                            </Button>
                          </div>
                        </div>
                      )}

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
