import React from 'react';

export const Form = ({ children, ...res }) => {
  return (
    <form className="flex flex-col justify-center py-8 px-6 shadow rounded-lg" {...res}>
      {children}
    </form>
  );
};
